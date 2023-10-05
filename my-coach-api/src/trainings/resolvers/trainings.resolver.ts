import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'auth/decorators/current-user.decorator';
import { ICurrentUser } from 'auth/interfaces/current-user.interface';

import { Training } from '../entities/training.entity';
import { CreateTrainingInput } from '../inputs/create-training.input';
import { TrainingsService } from '../services/trainings.service';

@Resolver('Trainings')
export class TrainingsResolver {
  constructor(private readonly trainingsService: TrainingsService) {}

  @Mutation(() => Training)
  async createTraining(
    @CurrentUser() user: ICurrentUser,
    @Args('createTrainingInput') trainingInput: CreateTrainingInput,
  ) {
    return await this.trainingsService.create(user.id, trainingInput);
  }
}
