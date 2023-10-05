import { Injectable } from '@nestjs/common';
import { Exercise, Prisma } from '@prisma/client';

import { GetExercisesInput } from 'exercises/inputs/get-exercises.input';
import { PrismaService } from 'db/services/prisma.service';
import { ExerciseWithRelatedFields } from '../interfaces/exercise-with-related-fields.interface';

@Injectable()
export class ExercisesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllBy(
    getExercisesInput: GetExercisesInput,
  ): Promise<ExerciseWithRelatedFields[]> {
    const {
      exercisesIds,
      musclesIds,
      typesIds,
      searchQuery: exerciseName,
      page,
      size,
    } = getExercisesInput || {};

    return this.prisma.exercise.findMany({
      take: size,
      skip: page ? (page - 1) * size : undefined,
      include: {
        exerciseType: true,
        medias: true,
        muscles: true,
      },
      where: {
        AND: [
          {
            id: {
              in: exercisesIds,
            },
          },
          {
            typeId: {
              in: typesIds,
            },
          },
          {
            muscles: {
              some: {
                muscleId: {
                  in: musclesIds,
                },
              },
            },
          },
          {
            OR: [
              {
                name: {
                  contains: exerciseName,
                  mode: 'insensitive',
                },
              },
              {
                nameUk: {
                  contains: exerciseName,
                  mode: 'insensitive',
                },
              },
            ],
          },
        ],
      },
    });
  }

  async findOne(
    exerciseWhereUniqueInput: Prisma.ExerciseWhereUniqueInput,
  ): Promise<ExerciseWithRelatedFields> {
    const exercise = await this.prisma.exercise.findUnique({
      where: exerciseWhereUniqueInput,
      include: {
        medias: true,
        exerciseType: true,
        muscles: true,
      },
    });

    if (!exercise) {
      return null;
    }

    return exercise;
  }

  async create(data: Prisma.ExerciseCreateInput): Promise<Exercise> {
    return this.prisma.exercise.create({
      data,
    });
  }

  async createTrainingExercises(trainingId: number, exercisesIds: number[]) {
    return await this.prisma.trainingExercise.createMany({
      data: exercisesIds.map((id) => ({
        trainingId,
        exerciseId: id,
      })),
    });
  }

  async findAllTrainingExercises(trainingId: number) {
    return await this.prisma.trainingExercise.findMany({
      where: {
        trainingId,
      },
    });
  }

  async checkIfExists(exerciseIds: number[]): Promise<boolean> {
    const count = await this.prisma.exercise.count({
      where: {
        id: { in: exerciseIds },
      },
    });

    return count === exerciseIds.length;
  }

  async delete(
    exerciseWhereUniqueInput: Prisma.ExerciseWhereUniqueInput,
  ): Promise<boolean> {
    const result = await this.prisma.exercise.delete({
      where: exerciseWhereUniqueInput,
      include: {
        medias: true,
        exerciseType: true,
        muscles: true,
      },
    });

    return !!result;
  }
}
