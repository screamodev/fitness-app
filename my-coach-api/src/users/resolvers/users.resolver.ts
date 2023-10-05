import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUser } from 'auth/decorators/current-user.decorator';
import { ICurrentUser } from 'auth/interfaces/current-user.interface';
import { UserWithAccessToken } from 'auth/outputs/user-with-access-token.output';
import { MediasService } from 'medias/services/medias.service';
import { mediaConfig } from '../config/media.config';
import { User } from '../entities/user.entity';
import { AddUserInfo } from '../inputs/add-user-info.input';
import { ChangePasswordInput } from '../inputs/change-password.input';
import { ChangeUserInfo } from '../inputs/change-user-info.input';
import { UsersService } from '../services/users.service';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly mediasService: MediasService,
  ) {}

  @Mutation(() => User)
  async changePassword(
    @CurrentUser() user: ICurrentUser,
    @Args('changePasswordInput') changePasswordInput: ChangePasswordInput,
  ) {
    return await this.usersService.changePassword(user.id, changePasswordInput);
  }

  @Mutation(() => User)
  async addUserInfo(
    @CurrentUser() user: ICurrentUser,
    @Args('userInfo') userInfo: AddUserInfo,
  ) {
    const { avatar, username, ...userData } = userInfo;

    const existingUser = await this.usersService.findOne({
      username,
    });

    if (existingUser && existingUser.id !== user.id) {
      throw new BadRequestException(`Username ${username} is already taken.`);
    }

    if (avatar) {
      await this.mediasService.createMedia(avatar, user.id, mediaConfig);
    }

    return this.usersService.update(user.id, { ...userData, username });
  }

  @Mutation(() => Boolean)
  async checkUsernameAvailability(
    @CurrentUser() user: ICurrentUser,
    @Args('username') username: string,
  ): Promise<boolean> {
    const isUsernameTaken = await this.usersService.isUserAlreadyExist(
      user.id,
      {
        username,
      },
    );

    return !isUsernameTaken;
  }

  @Query(() => Boolean)
  async checkEmailUniqueness(
    @CurrentUser() user: ICurrentUser,
    @Args('email') email: string,
  ): Promise<boolean> {
    const isEmailTaken = await this.usersService.isUserAlreadyExist(user.id, {
      email,
    });

    return !isEmailTaken;
  }

  @Mutation(() => UserWithAccessToken)
  async updateUserInfo(
    @CurrentUser() user: ICurrentUser,
    @Args('userInfo') userInfo: ChangeUserInfo,
  ) {
    return await this.usersService.updateUserInfo(user.id, userInfo);
  }

  @Mutation(() => Boolean)
  async deleteUserAvatar(@CurrentUser() user: ICurrentUser): Promise<boolean> {
    return await this.usersService.deleteUserAvatar(user.id);
  }

  @Mutation(() => Boolean)
  async deleteAccount(@CurrentUser() user: ICurrentUser): Promise<boolean> {
    const isDeleted = await this.usersService.delete(user.id);

    if (!isDeleted) {
      throw new NotFoundException(`Account not found`);
    }

    return isDeleted;
  }
}
