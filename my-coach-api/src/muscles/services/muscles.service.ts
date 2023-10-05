import { Injectable } from '@nestjs/common';

import { Muscle } from '../entities/muscle.entity';
import { AddMuscleInput } from '../inputs/add-muscle.input';
import { MusclesRepository } from '../repositories/muscles.repository';

@Injectable()
export class MusclesService {
  constructor(private readonly musclesRepository: MusclesRepository) {}

  async findAll(): Promise<Muscle[]> {
    return await this.musclesRepository.findAll();
  }

  async findExerciseMusclesById(exerciseId: number): Promise<Muscle[]> {
    const extendedMuscles = await this.musclesRepository.findAllByExerciseId(
      exerciseId,
    );

    return extendedMuscles.map(({ muscle, isPrimary }) => ({
      ...muscle,
      isPrimary,
    }));
  }

  async addExerciseMuscles(exerciseId: number, muscles: AddMuscleInput[]) {
    return await this.musclesRepository.createExerciseMuscles(
      exerciseId,
      muscles,
    );
  }

  async checkIfExists(muscles: AddMuscleInput[]): Promise<boolean> {
    const musclesIds = muscles.map(({ id }) => id);

    return await this.musclesRepository.checkIfExists(musclesIds);
  }
}
