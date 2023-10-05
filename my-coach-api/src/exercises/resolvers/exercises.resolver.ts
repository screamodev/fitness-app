import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from '@prisma/client';

import { GetExercisesInput } from 'exercises/inputs/get-exercises.input';
import { Roles } from 'auth/decorators/roles.decorator';
import { Exercise } from '../entities/exercise.entity';
import { CreateExerciseInput } from '../inputs/create-exercise.input';
import { ExercisesService } from '../services/exercises.service';

@Resolver('Exercises')
export class ExercisesResolver {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Query(() => [Exercise])
  async getExercises(
    @Args('getExercisesInput', { nullable: true })
    getExercisesInput: GetExercisesInput,
  ): Promise<Exercise[]> {
    return await this.exercisesService.findAll(getExercisesInput);
  }

  @Query(() => Exercise, { nullable: true })
  async getExerciseById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Exercise | null> {
    return await this.exercisesService.findOne({ id: id });
  }

  // @Roles(Role.admin)
  @Mutation(() => Exercise)
  async createExercise(
    @Args('createExerciseInput') exerciseInput: CreateExerciseInput,
  ): Promise<Exercise> {
    return await this.exercisesService.create(exerciseInput);
  }

  @Roles(Role.admin)
  update() {
    // TODO
  }

  @Roles(Role.admin)
  @Mutation(() => Boolean)
  async deleteExerciseById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.exercisesService.delete({ id: id });
  }
}
