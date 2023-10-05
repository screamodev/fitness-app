import type { ExerciseFilters } from '@/shared/config/filters';

export const getFiltersIds = (
  exerciseFilters: ExerciseFilters,
  key: keyof ExerciseFilters,
): number[] => {
  const filterValue = exerciseFilters[key];

  if (!filterValue) {
    return [];
  }

  return filterValue.map(({ id }) => +id);
};
