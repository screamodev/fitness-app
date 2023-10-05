import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { GetExercisesInput } from 'exercises/inputs/get-exercises.input';
import { ExerciseTypesService } from 'exercise-types/services/exercise-types.service';
import { MediasService } from 'medias/services/medias.service';
import { MusclesService } from 'muscles/services/muscles.service';
import { mediaConfig } from '../config/media.config';
import { Exercise } from '../entities/exercise.entity';
import { CreateExerciseInput } from '../inputs/create-exercise.input';
import { ExerciseWithRelatedFields } from '../interfaces/exercise-with-related-fields.interface';
import { ExercisesRepository } from '../repositories/exercises.repository';

@Injectable()
export class ExercisesService {
  constructor(
    private readonly exercisesRepository: ExercisesRepository,
    private readonly exerciseTypesService: ExerciseTypesService,
    private readonly mediasService: MediasService,
    private readonly musclesService: MusclesService,
  ) {}

  async create(exerciseData: CreateExerciseInput): Promise<Exercise> {
    const {
      nameUk,
      name,
      instruction,
      instructionUk,
      primaryImage,
      video,
      images,
      muscles,
      typeId,
    } = exerciseData;

    const isExerciseTypeValid = await this.exerciseTypesService.checkIfExists({
      id: Number(typeId),
    });

    const isMusclesValid = await this.musclesService.checkIfExists(muscles);

    if (!isMusclesValid) {
      throw new BadRequestException('Incorrect muscle data.');
    }

    if (!isExerciseTypeValid) {
      throw new BadRequestException('Incorrect exercise type.');
    }

    const exercise = await this.exercisesRepository.create({
      nameUk,
      name,
      instruction,
      instructionUk,
      exerciseType: {
        connect: {
          id: Number(typeId),
        },
      },
    });

    if (primaryImage) {
      await this.mediasService.createMedia(
        primaryImage,
        exercise.id,
        mediaConfig,
      );
    }

    if (images || video) {
      await this.mediasService.createMediaFiles(
        exercise.id,
        mediaConfig,
        [...(images || []), video].filter(Boolean),
      );
    }

    await this.musclesService.addExerciseMuscles(exercise.id, muscles);

    return this.findOne({ id: exercise.id });
  }

  async findOne(
    exerciseWhereUniqueInput: Prisma.ExerciseWhereUniqueInput,
  ): Promise<Exercise | null> {
    const exercise = await this.exercisesRepository.findOne(
      exerciseWhereUniqueInput,
    );

    if (!exercise) {
      return null;
    }

    return this.getExerciseDetails(exercise);
  }

  async findAll(getExercisesInput?: GetExercisesInput): Promise<Exercise[]> {
    const exercises = await this.exercisesRepository.findAllBy(
      getExercisesInput,
    );

    return Promise.all(
      exercises.map((exercise) => this.getExerciseDetails(exercise)),
    );
  }

  private async getExerciseDetails(
    exercise: ExerciseWithRelatedFields,
  ): Promise<Exercise> {
    const { id, medias, exerciseType, primaryImageId, ...exerciseData } =
      exercise;

    const exerciseMuscles = await this.musclesService.findExerciseMusclesById(
      id,
    );

    const exerciseMedias = await Promise.all(
      medias
        .filter(({ id }) => id !== primaryImageId)
        .map(
          async ({ id }) => await this.mediasService.findOne(id, mediaConfig),
        ),
    );

    const primaryImage = primaryImageId
      ? await this.mediasService.findOne(primaryImageId, mediaConfig)
      : null;

    return {
      ...exerciseData,
      id,
      primaryImage,
      type: exerciseType,
      medias: exerciseMedias,
      muscles: exerciseMuscles,
    };
  }

  async delete(
    exerciseWhereUniqueInput: Prisma.ExerciseWhereUniqueInput,
  ): Promise<boolean> {
    const exercise = await this.exercisesRepository.findOne(
      exerciseWhereUniqueInput,
    );

    const { medias } = exercise;

    if (!exercise) {
      throw new NotFoundException(`Exercise not found`);
    }

    medias.forEach(async (media) => {
      await this.mediasService.deleteMedia(media.mediaId);
    });

    return await this.exercisesRepository.delete(exerciseWhereUniqueInput);
  }
}
