import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { SignUpUser } from 'auth/inputs/sign-up-user.input';
import { UserWithAccessToken } from 'auth/outputs/user-with-access-token.output';
import { AuthService } from 'auth/services/auth.service';
import { Media } from 'medias/entities/media.entity';
import { CanvasService } from 'medias/services/canvas.service';
import { MediasService } from 'medias/services/medias.service';
import { StorageService } from 'storage/services/storage.service';
import { UserAvatarsProperties } from 'users/constants/user-avatar-limits.constant';
import { ChangePasswordInput } from 'users/inputs/change-password.input';
import { ChangeUserInfo } from 'users/inputs/change-user-info.input';
import { AvatarsRepository } from 'users/repositories/avatars.repository';
import { mediaConfig } from '../config/media.config';
import { User } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';
import { PasswordService } from './password.service';
import { UsernameService } from './username.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly avatarsRepository: AvatarsRepository,
    private readonly storageService: StorageService,
    private readonly canvasService: CanvasService,
    private readonly mediasService: MediasService,
    private readonly passwordService: PasswordService,
    private readonly usernameService: UsernameService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(userData: SignUpUser): Promise<User> {
    const { email } = userData;

    const existingUser = await this.findOne({
      email,
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const password = await this.passwordService.hashPassword(userData.password);

    const generatedAvatar = await this.canvasService.createAvatar(
      userData.fullName,
    );

    const username = await this.usernameService.generateUniqueUsernameFromEmail(
      email,
    );

    const user = await this.usersRepository.create({
      ...userData,
      password,
      username,
    });

    await this.mediasService.createGeneratedAvatar(generatedAvatar, user.id);

    return this.findOne({ id: user.id });
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    const user = await this.usersRepository.findOne(userWhereUniqueInput);

    if (!user) {
      return null;
    }

    const avatars = await this.findAllUserAvatarsById(user.id);

    const avatar = await this.mediasService.findOne(
      user.selectedAvatarId,
      mediaConfig,
    );

    return { ...user, avatar, avatars };
  }

  async isUserAlreadyExist(
    currentUserId: number,
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<boolean> {
    const user = await this.findOne(userWhereUniqueInput);

    if (user && currentUserId === user.id) {
      return false;
    }

    return !!user;
  }

  async updateUserInfo(
    userId: number,
    userInfo: ChangeUserInfo,
  ): Promise<UserWithAccessToken> {
    const { fullName, username, email, height, weight, avatar } = userInfo;

    const currentUser = await this.usersRepository.findOne({ id: userId });

    if (email && email !== currentUser.email) {
      const isEmailHasBeenTaken = await this.isUserAlreadyExist(
        currentUser.id,
        { email },
      );

      if (isEmailHasBeenTaken) {
        throw new ConflictException('Email has already been taken');
      }
    }

    if (username && username !== currentUser.username) {
      const isUsernameHasBeenTaken = await this.isUserAlreadyExist(
        currentUser.id,
        {
          username,
        },
      );

      if (isUsernameHasBeenTaken) {
        throw new ConflictException('Username has already been taken');
      }
    }

    if (avatar) {
      await this.mediasService.createMedia(avatar, userId, mediaConfig);

      await this.deletePrevUserAvatar(userId);
    }

    const user = await this.update(userId, {
      fullName,
      username,
      email,
      height,
      weight,
    });

    const accessToken = await this.authService.generateAccessToken(user);

    return {
      user,
      accessToken,
    };
  }

  async update(
    id: number,
    data: Partial<Prisma.UserUpdateInput> & { selectedAvatarId?: number },
  ): Promise<User> {
    const user = await this.usersRepository.update(id, data);

    return this.findOne({ id: user.id });
  }

  async changePassword(
    id: number,
    changePasswordInput: ChangePasswordInput,
  ): Promise<User> {
    const user = await this.findOne({ id: id });

    const { oldPassword, newPassword } = changePasswordInput;

    const isPasswordsMatch = await this.passwordService.comparePassword(
      oldPassword,
      user.password,
    );

    if (!isPasswordsMatch) {
      throw new BadRequestException('User password is incorrect');
    }

    const hashedPassword = await this.passwordService.hashPassword(newPassword);

    return await this.update(id, { password: hashedPassword });
  }

  async findAllUserAvatarsById(id: number): Promise<Media[]> {
    const medias = await this.avatarsRepository.findByUserId(id);

    return Promise.all(
      medias.map(async ({ media, ...mediaFile }) => {
        const { key } = media;

        const url = await this.storageService.getFileUrl(key);

        return { url, ...media, ...mediaFile };
      }),
    );
  }

  async deleteUserAvatar(userId: number): Promise<boolean> {
    const { defaultAvatarIndex, customAvatarIndex } = UserAvatarsProperties;

    const userAvatars = await this.findAllUserAvatarsById(userId);

    if (userAvatars.length < UserAvatarsProperties.maxCount) {
      throw new ForbiddenException(`You can't delete default avatar`);
    }

    await this.update(userId, {
      selectedAvatarId: userAvatars[defaultAvatarIndex].id,
    });

    const isDeleted = await this.avatarsRepository.delete(
      userAvatars[customAvatarIndex].id,
    );

    return isDeleted;
  }

  async delete(id: number): Promise<boolean> {
    return await this.usersRepository.delete(id);
  }

  async deletePrevUserAvatar(userId: number): Promise<boolean> {
    const { customAvatarIndex } = UserAvatarsProperties;

    const userAvatars = await this.findAllUserAvatarsById(userId);

    if (userAvatars.length <= UserAvatarsProperties.maxCount) {
      return false;
    }

    const deletedAvatar = await this.mediasService.deleteMedia(
      userAvatars[customAvatarIndex].id,
    );

    return !!deletedAvatar;
  }
}
