import { computed, watch } from 'vue';

import { useGetMusclesQuery } from '@/shared/api/muscles';
import { useMusclesStore } from '../model';

export const useLoadMuscles = () => {
  const { setMuscles } = useMusclesStore();

  const { result, loading, error } = useGetMusclesQuery();

  const isError = computed<boolean>(() => !!error.value);

  const muscles = computed(() => result.value?.getMuscles ?? []);

  watch(muscles, (updatedMuscles) => {
    setMuscles(updatedMuscles);
  });

  return {
    isLoading: loading,
    isError,
  };
};
