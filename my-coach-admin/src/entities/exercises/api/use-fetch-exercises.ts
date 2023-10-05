import { computed, watch } from 'vue';

import { useExercisesStore } from '@/entities/exercises';
import { type Exercise, type ExercisesParams, useGetExercisesQuery } from '@/shared/api/exercises';

export const useFetchExercises = (exercisesParams?: ExercisesParams) => {
  const { setExercisesList } = useExercisesStore();

  const { result, loading, error, refetch } = useGetExercisesQuery(exercisesParams);

  const exercises = computed<Exercise[]>(() => result.value?.getExercises ?? []);

  const isError = computed<boolean>(() => !!error.value);

  watch(exercises, (updatedExercises) => {
    setExercisesList(updatedExercises);
  });

  return {
    isLoading: loading,
    isError,
    refetch,
  };
};
