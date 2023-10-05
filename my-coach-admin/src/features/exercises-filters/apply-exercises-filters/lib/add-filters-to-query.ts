import type { Router } from 'vue-router';

import type { ExerciseType } from '@/shared/api/exercise-types';
import type { Muscle } from '@/shared/api/muscles';
import { Routes } from '@/shared/config/routes';
import { getFiltersIdsQuery } from '@/shared/lib/filters';

export const addFiltersToQuery = (
  router: Router,
  exerciseTypes: ExerciseType[],
  muscles: Muscle[],
) => {
  const filters = {
    types: getFiltersIdsQuery<ExerciseType>(exerciseTypes) || undefined,
    muscles: getFiltersIdsQuery<Muscle>(muscles) || undefined,
  };

  const query: Record<string, string | undefined> = {};

  if (filters.types) {
    query['types'] = filters.types;
  }

  if (filters.muscles) {
    query['muscles'] = filters.muscles;
  }

  router.push({
    path: Routes.exercises,
    query,
  });
};
