import { computed, toRefs, watch } from 'vue';

import { useExercisesStore, useFetchExercises } from '@/entities/exercises';
import { getFiltersIds } from '@/shared/lib/filters';

export const useLoadExercisesWithParams = () => {
  const exercisesStore = useExercisesStore();

  const { exerciseFilters } = toRefs(exercisesStore);

  const typesIds = computed(() =>
    exerciseFilters.value.types?.length ? getFiltersIds(exerciseFilters.value, 'types') : undefined,
  );

  const musclesIds = computed(() =>
    exerciseFilters.value.muscles?.length
      ? getFiltersIds(exerciseFilters.value, 'muscles')
      : undefined,
  );

  const exercisesParams = computed(() => ({
    filters: {
      muscles: musclesIds.value,
      types: typesIds.value,
    },
  }));

  const { isLoading, isError, refetch } = useFetchExercises(exercisesParams.value);

  watch([musclesIds, typesIds], ([updatedMusclesArray, updatedTypesArray]) => {
    refetch({
      musclesIds: updatedMusclesArray,
      typesIds: updatedTypesArray,
    });
  });

  return {
    isLoading,
    isError,
  };
};
