import { Injectable } from '@nestjs/common';

import { PrismaService } from 'db/services/prisma.service';
import { Muscle } from '../entities/muscle.entity';
import { AddMuscleInput } from '../inputs/add-muscle.input';

@Injectable()
export class MusclesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Muscle[]> {
    return this.prisma.muscle.findMany();
  }

  async findAllByExerciseId(exerciseId: number) {
    return await this.prisma.exerciseMuscle.findMany({
      where: {
        exerciseId: exerciseId,
      },
      include: {
        muscle: true,
      },
      orderBy: {
        isPrimary: 'desc',
      },
    });
  }

  async createExerciseMuscles(exerciseId: number, muscles: AddMuscleInput[]) {
    return await this.prisma.exerciseMuscle.createMany({
      data: muscles.map(({ id, isPrimary }) => ({
        exerciseId,
        muscleId: id,
        isPrimary: isPrimary,
      })),
    });
  }

  async checkIfExists(musclesIds: number[]): Promise<boolean> {
    const count = await this.prisma.muscle.count({
      where: {
        id: { in: musclesIds },
      },
    });

    return count === musclesIds.length;
  }
}
