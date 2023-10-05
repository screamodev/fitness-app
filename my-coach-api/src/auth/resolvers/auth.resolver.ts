import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from 'users/entities/user.entity';
import { UsersService } from 'users/services/users.service';
import { CurrentUser } from '../decorators/current-user.decorator';
import { Public } from '../decorators/public.decorator';
import { SignInUser } from '../inputs/sign-in-user.input';
import { SignUpUser } from '../inputs/sign-up-user.input';
import { ICurrentUser } from '../interfaces/current-user.interface';
import { UserWithAccessToken } from '../outputs/user-with-access-token.output';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Public()
  @Mutation(() => UserWithAccessToken)
  async signIn(@Args('signInUser') signInUser: SignInUser) {
    const user = await this.authService.validateUser(signInUser);

    const accessToken = await this.authService.generateAccessToken(user);

    return {
      user,
      accessToken,
    };
  }

  @Public()
  @Mutation(() => UserWithAccessToken)
  async signUp(@Args('signUpUser') signUpUser: SignUpUser) {
    const user = await this.usersService.create(signUpUser);

    const accessToken = await this.authService.generateAccessToken(user);

    return {
      user,
      accessToken,
    };
  }

  @Query(() => User)
  async me(@CurrentUser() user: ICurrentUser) {
    return this.usersService.findOne({ email: user.email });
  }
}
