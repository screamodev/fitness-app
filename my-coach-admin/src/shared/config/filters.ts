import type { ExerciseType } from '@/shared/api/exercise-types';
import type { Muscle } from '@/shared/api/muscles';

export interface ExerciseFilters {
  types?: ExerciseType[];
  muscles?: Muscle[];
}
