import { Query, Resolver } from '@nestjs/graphql';

import { ExerciseType } from '../entities/exercise-type.entity';
import { ExerciseTypesService } from '../services/exercise-types.service';

@Resolver('ExerciseTypes')
export class ExerciseTypesResolver {
  constructor(private readonly exerciseTypesService: ExerciseTypesService) {}

  @Query(() => [ExerciseType])
  async getExerciseTypes(): Promise<ExerciseType[]> {
    return await this.exerciseTypesService.findAll();
  }
}
