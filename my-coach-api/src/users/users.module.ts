import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from 'auth/auth.module';
import { AuthService } from 'auth/services/auth.service';
import { JwtConfigService } from 'auth/services/jwt-config.service';
import { PrismaModule } from 'db/prisma.module';
import { MediasModule } from 'medias/medias.module';
import { StorageModule } from 'storage/storage.module';
import { AvatarsRepository } from './repositories/avatars.repository';
import { UsersRepository } from './repositories/users.repository';
import { UsersResolver } from './resolvers/users.resolver';
import { PasswordService } from './services/password.service';
import { UsernameService } from './services/username.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    forwardRef(() => AuthModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useClass: JwtConfigService,
    }),
    MediasModule,
    StorageModule,
  ],
  providers: [
    AuthService,
    UsersService,
    UsernameService,
    PasswordService,
    UsersResolver,
    AvatarsRepository,
    UsersRepository,
  ],
  exports: [UsersService, PasswordService],
})
export class UsersModule {}
