import { BadRequestException, Injectable } from '@nestjs/common';

import { ExercisesRepository } from 'exercises/repositories/exercises.repository';
import { ExercisesService } from 'exercises/services/exercises.service';
import { Set } from 'sets/entities/set.entity';
import { SetsRepository } from 'sets/repositories/sets.repository';
import { Training } from 'trainings/entities/training.entity';

import { UsersService } from 'users/services/users.service';
import { CreateTrainingInput } from '../inputs/create-training.input';
import { TrainingsRepository } from '../repositories/trainings.repository';

@Injectable()
export class TrainingsService {
  constructor(
    private readonly trainingsRepository: TrainingsRepository,
    private readonly exercisesRepository: ExercisesRepository,
    private readonly setsRepository: SetsRepository,
    private readonly usersService: UsersService,
    private readonly exercisesService: ExercisesService,
  ) {}

  async create(
    userId: number,
    trainingData: CreateTrainingInput,
  ): Promise<Training> {
    const { appointedAt, sets } = trainingData;

    const exercisesIds = sets.map(({ exerciseId }) => exerciseId);

    // const isExerciseValid = await this.exercisesRepository.checkIfExists(
    //   exercisesIds,
    // );
    //
    // if (!isExerciseValid) {
    //   throw new BadRequestException("Exercise doesn't exist");
    // }

    const training = await this.trainingsRepository.create({
      appointedAt,
      owner: {
        connect: {
          id: Number(userId),
        },
      },
    });

    await this.exercisesRepository.createTrainingExercises(
      training.id,
      exercisesIds,
    );

    const trainingExercises =
      await this.exercisesRepository.findAllTrainingExercises(training.id);

    const trainingExercisesIds = trainingExercises.map(({ id }) => id);

    await this.setsRepository.create(trainingExercisesIds, sets);

    const setsWithRelations = await this.setsRepository.findAll(
      trainingExercisesIds,
    );

    const trainingSets: Set[] = await Promise.all(
      setsWithRelations.map(
        async ({
          id,
          reps,
          weight,
          time,
          trainingExercise: { exerciseId },
        }) => {
          const exercise = await this.exercisesService.findOne({
            id: exerciseId,
          });

          return {
            id,
            reps,
            weight,
            time,
            exerciseId,
            exercise,
          };
        },
      ),
    );

    const owner = await this.usersService.findOne({ id: training.ownerId });

    return {
      id: training.id,
      appointedAt: training.appointedAt,
      sets: trainingSets,
      ownerId: training.ownerId,
      owner,
    };
  }
}
