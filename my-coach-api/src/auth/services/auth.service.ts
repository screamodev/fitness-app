import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'users/entities/user.entity';
import { PasswordService } from 'users/services/password.service';
import { UsersService } from 'users/services/users.service';
import { SignInUser } from '../inputs/sign-in-user.input';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}
  async validateUser(signInUser: SignInUser): Promise<User> {
    const { email, password } = signInUser;

    const user = await this.usersService.findOne({ email });

    const isPasswordsMatch = await this.passwordService.comparePassword(
      password,
      user.password,
    );

    if (!user || !isPasswordsMatch) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async generateAccessToken(user: User) {
    const payload = {
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      sub: user.id,
    };

    return this.jwtService.sign(payload);
  }
}
