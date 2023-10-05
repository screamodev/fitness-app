import { Injectable } from '@nestjs/common';

import { CreateSetInput } from 'sets/inputs/create-set.input';
import { PrismaService } from 'db/services/prisma.service';

@Injectable()
export class SetsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(trainingExerciseIds: number[], sets: CreateSetInput[]) {
    return await this.prisma.set.createMany({
      data: trainingExerciseIds.map((id, index) => ({
        reps: sets[index].reps,
        weight: sets[index].weight,
        time: sets[index].time,
        trainingExerciseId: id,
      })),
    });
  }

  async findAll(trainingExerciseIds: number[]) {
    return await this.prisma.set.findMany({
      where: {
        trainingExerciseId: {
          in: trainingExerciseIds,
        },
      },
      include: {
        trainingExercise: {
          include: {
            exercise: true,
          },
        },
      },
    });
  }
}
