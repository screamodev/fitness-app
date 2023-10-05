import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import type { ExerciseType } from '@/shared/api/exercise-types';
import { StoreKey } from '@/shared/config/store';

type ExerciseTypeMapById = Map<string, ExerciseType>;

export const useExerciseTypesStore = defineStore(StoreKey.exerciseTypes, () => {
  const exerciseTypes = ref<ExerciseType[]>([]);

  const setExerciseTypes = (allExerciseTypes: ExerciseType[]) => {
    exerciseTypes.value = allExerciseTypes;
  };

  const mappedExerciseTypesId = computed<ExerciseTypeMapById>(() => {
    const mappedMusclesById = new Map<string, ExerciseType>();

    exerciseTypes.value.map((type: ExerciseType) => {
      mappedMusclesById.set(type.id, type);
    });

    return mappedMusclesById;
  });

  const checkExerciseTypesIds = (typesIds: string[]) => {
    return typesIds.map((id) => mappedExerciseTypesId.value.has(id)).includes(false);
  };

  return {
    exerciseTypes,
    setExerciseTypes,
    mappedExerciseTypesId,
    checkExerciseTypesIds,
  };
});
