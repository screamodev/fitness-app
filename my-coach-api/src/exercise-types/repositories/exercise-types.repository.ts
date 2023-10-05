import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from 'db/services/prisma.service';
import { ExerciseType } from '../entities/exercise-type.entity';

@Injectable()
export class ExerciseTypesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ExerciseType[]> {
    return this.prisma.exerciseType.findMany();
  }

  async findOne(
    exerciseTypeWhereUniqueInput: Prisma.ExerciseTypeWhereUniqueInput,
  ): Promise<ExerciseType> {
    const exerciseType = await this.prisma.exerciseType.findUnique({
      where: exerciseTypeWhereUniqueInput,
    });

    if (!exerciseType) {
      return null;
    }

    return exerciseType;
  }

  async checkIfExists(
    exerciseTypeWhereUniqueInput: Prisma.ExerciseTypeWhereUniqueInput,
  ): Promise<ExerciseType> {
    return this.prisma.exerciseType.findFirst({
      where: exerciseTypeWhereUniqueInput,
    });
  }
}
