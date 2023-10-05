import { Module } from '@nestjs/common';

import { PrismaModule } from 'db/prisma.module';
import { ExerciseTypesRepository } from './repositories/exercise-types.repository';
import { ExerciseTypesResolver } from './resolvers/exercise-types.resolver';
import { ExerciseTypesService } from './services/exercise-types.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ExerciseTypesService,
    ExerciseTypesRepository,
    ExerciseTypesResolver,
  ],
  exports: [ExerciseTypesService],
})
export class ExerciseTypesModule {}
