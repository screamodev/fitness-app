import { computed, ref } from 'vue';
import { toLower } from 'lodash';
import { defineStore } from 'pinia';

import type { Muscle } from '@/shared/api/muscles';
import { StoreKey } from '@/shared/config/store';

type MusclesMapByName = Map<string, Muscle>;

type MusclesMapById = Map<string, Muscle>;

export const useMusclesStore = defineStore(StoreKey.muscles, () => {
  const muscles = ref<Muscle[]>([]);

  const mappedMusclesByName = computed<MusclesMapByName>(() => {
    const mappedMusclesByName = new Map<string, Muscle>();

    muscles.value.map((muscle: Muscle) => {
      mappedMusclesByName.set(toLower(muscle.name), muscle);
    });

    return mappedMusclesByName;
  });

  const mappedMusclesById = computed<MusclesMapById>(() => {
    const mappedMusclesById = new Map<string, Muscle>();

    muscles.value.map((muscle: Muscle) => {
      mappedMusclesById.set(muscle.id, muscle);
    });

    return mappedMusclesById;
  });

  const setMuscles = (allMuscles: Muscle[]) => {
    muscles.value = allMuscles;
  };

  const checkMusclesIds = (musclesIds: string[]) => {
    return musclesIds.map((id) => mappedMusclesById.value.has(id)).includes(false);
  };

  return {
    muscles,
    mappedMusclesByName,
    mappedMusclesById,
    setMuscles,
    checkMusclesIds,
  };
});
