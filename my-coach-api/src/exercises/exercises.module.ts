import { Module } from '@nestjs/common';

import { PrismaModule } from 'db/prisma.module';
import { ExerciseTypesRepository } from 'exercise-types/repositories/exercise-types.repository';
import { ExerciseTypesService } from 'exercise-types/services/exercise-types.service';
import { MediasModule } from 'medias/medias.module';
import { MusclesModule } from 'muscles/muscles.module';
import { StorageModule } from 'storage/storage.module';
import { ExercisesRepository } from './repositories/exercises.repository';
import { ExercisesResolver } from './resolvers/exercises.resolver';
import { ExercisesService } from './services/exercises.service';

@Module({
  imports: [PrismaModule, MediasModule, MusclesModule, StorageModule],
  providers: [
    ExerciseTypesRepository,
    ExerciseTypesService,
    ExercisesRepository,
    ExercisesResolver,
    ExercisesService,
  ],
  exports: [ExercisesService],
})
export class ExercisesModule {}
