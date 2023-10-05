import type { ExerciseType } from '@/shared/api/exercise-types';
import type { CreateMuscleData, Muscle } from '@/shared/api/muscles';
import type { Media } from '../media';

export type CreateExercise = {
  name: string;
  nameUk: string;
  primaryImage?: Media;
  images: ExtendedMedia[];
  video: Media | null;
  typeId: string;
  instruction?: string;
  instructionUk?: string;
  muscles: Muscle[];
};

export interface ExtendedMedia extends Media {
  id: number;
}

export interface Image {
  url: string;
}

export interface CreateExerciseMutationResponse {
  id: string;
  name: string;
  nameUk: string;
  instruction?: string;
  instructionUk?: string;
  medias: Media[];
  muscles: Muscle[];
  type: ExerciseType;
  primaryImage: Media;
}

export interface CreateExerciseMutationVariables {
  name: string;
  nameUk: string;
  typeId: string;
  instruction?: string;
  instructionUk?: string;
  primaryImage?: Blob;
  images: Blob[] | [];
  video: Blob | null;
  muscles: CreateMuscleData[];
}

export interface Exercise {
  id: string;
  name: string;
  nameUk: string;
  instruction: string;
  instructionUk: string;
  medias: Media[] | [];
  type: ExerciseType;
  primaryImage: Media | null;
  muscles: Muscle[];
}

export interface GetExercisesResponse {
  getExercises: Exercise[];
}

export interface GetExerciseVariable {
  id: number;
}

export interface GetExerciseResponse {
  getExerciseById: Exercise;
}

export interface CreateExerciseResponse {
  data: {
    createExercise: CreateExerciseMutationResponse;
  };
}

export type ExercisesParams = Partial<{
  filters: Partial<{
    muscles: number[];
    types: number[];
  }>;
}>;
