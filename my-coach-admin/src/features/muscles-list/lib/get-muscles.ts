import type { Muscle } from '@/shared/api/muscles';

export const getMainMuscles = (muscles: Muscle[]) =>
  muscles.filter((muscle: Muscle) => muscle.isPrimary);

export const getAdditionalMuscles = (muscles: Muscle[]) =>
  muscles.filter((muscle: Muscle) => !muscle.isPrimary);
