import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ExercisesModule } from 'exercises/exercises.module';
import { ExercisesRepository } from 'exercises/repositories/exercises.repository';
import { ExercisesService } from 'exercises/services/exercises.service';
import { SetsRepository } from 'sets/repositories/sets.repository';
import { SetsModule } from 'sets/sets.module';
import { AuthService } from 'auth/services/auth.service';
import { PrismaModule } from 'db/prisma.module';
import { ExerciseTypesRepository } from 'exercise-types/repositories/exercise-types.repository';
import { ExerciseTypesService } from 'exercise-types/services/exercise-types.service';
import { MediasModule } from 'medias/medias.module';
import { MusclesModule } from 'muscles/muscles.module';
import { StorageModule } from 'storage/storage.module';
import { AvatarsRepository } from 'users/repositories/avatars.repository';
import { UsersRepository } from 'users/repositories/users.repository';
import { UsernameService } from 'users/services/username.service';
import { UsersService } from 'users/services/users.service';
import { UsersModule } from 'users/users.module';
import { TrainingsRepository } from './repositories/trainings.repository';
import { TrainingsResolver } from './resolvers/trainings.resolver';
import { TrainingsService } from './services/trainings.service';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ExercisesModule,
    MediasModule,
    MusclesModule,
    StorageModule,
    SetsModule,
  ],
  providers: [
    ExerciseTypesRepository,
    ExerciseTypesService,
    UsersService,
    UsersRepository,
    AuthService,
    JwtService,
    UsernameService,
    AvatarsRepository,
    ExercisesRepository,
    ExercisesService,
    TrainingsRepository,
    TrainingsResolver,
    TrainingsService,
    SetsRepository,
  ],
  exports: [TrainingsService],
})
export class TrainingsModule {}
