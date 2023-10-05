import { computed, ref, toRefs, watch } from 'vue';

import { useExercisesStore } from '@/entities/exercises';
import { useMusclesStore } from '@/entities/muscles';
import type { Muscle } from '@/shared/api/muscles';

export const useSelectedMuscles = () => {
  const exerciseStore = useExercisesStore();

  const musclesStore = useMusclesStore();

  const { mappedMusclesById } = toRefs(musclesStore);

  const { exerciseFilters } = toRefs(exerciseStore);

  const filteredMuscles = ref<Muscle[]>([]);

  const filteredMusclesId = computed<string[]>(() =>
    filteredMuscles.value.map((muscle) => muscle.id),
  );

  const getSelectedMuscles = (musclesIds: string[]): Muscle[] => {
    return musclesIds.reduce((filteredMuscles: Muscle[], id: string) => {
      const muscle = mappedMusclesById.value.get(id);

      return muscle ? [...filteredMuscles, muscle] : filteredMuscles;
    }, []);
  };

  const updateSelectMuscles = (musclesIds: string[]) => {
    filteredMuscles.value = getSelectedMuscles(musclesIds);
  };

  watch(exerciseFilters, ({ muscles }) => {
    filteredMuscles.value = muscles || [];
  });

  return {
    filteredMuscles,
    filteredMusclesId,
    updateSelectMuscles,
    getSelectedMuscles,
  };
};
