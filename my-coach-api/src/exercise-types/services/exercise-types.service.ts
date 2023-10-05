import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { ExerciseType } from '../entities/exercise-type.entity';
import { ExerciseTypesRepository } from '../repositories/exercise-types.repository';

@Injectable()
export class ExerciseTypesService {
  constructor(
    private readonly exerciseTypesRepository: ExerciseTypesRepository,
  ) {}

  async findAll(): Promise<ExerciseType[]> {
    return await this.exerciseTypesRepository.findAll();
  }

  async findOne(
    exerciseTypeWhereUniqueInput: Prisma.ExerciseTypeWhereUniqueInput,
  ): Promise<ExerciseType | null> {
    const exerciseType = await this.exerciseTypesRepository.findOne(
      exerciseTypeWhereUniqueInput,
    );

    if (!exerciseType) {
      return null;
    }

    return exerciseType;
  }

  async checkIfExists(
    exerciseTypeWhereUniqueInput: Prisma.ExerciseTypeWhereUniqueInput,
  ): Promise<boolean> {
    const exerciseType = await this.exerciseTypesRepository.checkIfExists(
      exerciseTypeWhereUniqueInput,
    );

    return !!exerciseType;
  }
}
