import { ref, toRefs, watch } from 'vue';

import { useExerciseTypesStore } from '@/entities/exercise-types';
import { useExercisesStore } from '@/entities/exercises';
import type { ExerciseType } from '@/shared/api/exercise-types';

export const useSelectedTypes = () => {
  const exerciseStore = useExercisesStore();

  const exerciseTypesStore = useExerciseTypesStore();

  const { mappedExerciseTypesId } = toRefs(exerciseTypesStore);

  const { exerciseFilters } = toRefs(exerciseStore);

  const filteredExerciseTypes = ref<ExerciseType[]>([]);

  const getSelectedTypes = (typesIds: string[]): ExerciseType[] => {
    return typesIds.reduce((filteredTypes: ExerciseType[], id: string) => {
      const type = mappedExerciseTypesId.value.get(id);

      return type ? [...filteredTypes, type] : filteredTypes;
    }, []);
  };

  const updateSelectExerciseTypes = (exerciseTypes: ExerciseType[]) => {
    filteredExerciseTypes.value = exerciseTypes;
  };

  watch(exerciseFilters, ({ types }) => {
    filteredExerciseTypes.value = types || [];
  });

  return {
    filteredExerciseTypes,
    updateSelectExerciseTypes,
    getSelectedTypes,
  };
};
