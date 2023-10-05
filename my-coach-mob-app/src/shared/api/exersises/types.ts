import { ExerciseType } from 'shared/api/exercise-types';
import { Media } from 'shared/api/medias';
import { MuscleType } from 'shared/api/muscles';

export type Exercise = {
  id: string;
  instruction: string;
  instructionUk: string;
  medias: Media[];
  name: string;
  nameUk: string;
  primaryImage: Media | null;
  muscles: MuscleType[];
  type: ExerciseType;
};

export type ExerciseQueryResponse = {
  getExercises: Exercise[];
};

export type ExerciseByIdQueryResponse = {
  getExerciseById: Exercise;
};
