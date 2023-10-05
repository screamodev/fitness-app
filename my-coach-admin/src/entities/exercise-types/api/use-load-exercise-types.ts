import { computed, watch } from 'vue';

import { useGetExerciseTypesQuery } from '@/shared/api/exercise-types';
import { useExerciseTypesStore } from '../model';

export const useLoadExerciseTypes = () => {
  const { setExerciseTypes } = useExerciseTypesStore();

  const { result, loading, error } = useGetExerciseTypesQuery();

  const isError = computed<boolean>(() => !!error.value);

  const exerciseTypes = computed(() => result.value?.getExerciseTypes ?? []);

  watch(exerciseTypes, (updatedTypes) => {
    setExerciseTypes(updatedTypes);
  });

  return {
    isLoading: loading,
    isError,
  };
};
