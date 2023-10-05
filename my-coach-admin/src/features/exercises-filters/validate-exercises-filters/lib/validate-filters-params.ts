import { ref } from 'vue';

import { useExerciseTypesStore } from '@/entities/exercise-types';
import { useMusclesStore } from '@/entities/muscles';
import { getParamsIds } from '@/shared/lib/params';

export const validateFiltersParams = (query: { types?: string; muscles?: string }) => {
  const { checkMusclesIds } = useMusclesStore();

  const { checkExerciseTypesIds } = useExerciseTypesStore();

  const isMusclesValid = ref<boolean>(true);

  const isTypesValid = ref<boolean>(true);

  if (query['muscles']) {
    const musclesIds = getParamsIds(query['muscles']);

    isMusclesValid.value = !checkMusclesIds(musclesIds);
  }

  if (query['types']) {
    const exerciseTypesIds = getParamsIds(query['types']);

    isTypesValid.value = !checkExerciseTypesIds(exerciseTypesIds);
  }

  return isMusclesValid.value && isTypesValid.value;
};
