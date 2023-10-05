import {
  Exercise,
  ExerciseMedia,
  ExerciseMuscle,
  ExerciseType,
} from '@prisma/client';

export interface ExerciseWithRelatedFields extends Exercise {
  exerciseType: ExerciseType;
  medias: ExerciseMedia[];
  muscles: ExerciseMuscle[];
}
