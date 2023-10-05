import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Exercise } from '@/shared/api/exercises';
import type { ExerciseFilters } from '@/shared/config/filters';
import { StoreKey } from '@/shared/config/store';

export const useExercisesStore = defineStore(StoreKey.exercises, () => {
  const exercisesList = ref<Exercise[]>([]);

  const setExercisesList = (allExercises: Exercise[]) => {
    exercisesList.value = allExercises;
  };

  const isFiltersOpen = ref<boolean>(false);

  const exerciseFilters = ref<ExerciseFilters>({});

  const toggleFilters = () => {
    isFiltersOpen.value = !isFiltersOpen.value;
  };

  const closeFilters = () => {
    isFiltersOpen.value = false;
  };

  const openFilters = () => {
    isFiltersOpen.value = true;
  };

  const clearFilters = () => {
    exerciseFilters.value = {};
  };

  const setFilters = (filters: ExerciseFilters) => {
    exerciseFilters.value = { ...filters };
  };

  return {
    exercisesList,
    setExercisesList,
    exerciseFilters,
    isFiltersOpen,
    toggleFilters,
    clearFilters,
    setFilters,
    closeFilters,
    openFilters,
  };
});
