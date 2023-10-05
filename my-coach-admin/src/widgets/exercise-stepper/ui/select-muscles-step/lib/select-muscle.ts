import { toRefs } from 'vue';

import { useMusclesStore } from '@/entities/muscles';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import type { Muscle } from '@/shared/api/muscles';

const stepperExerciseStore = useStepperExerciseStore();

const musclesStore = useMusclesStore();

const { exercise } = toRefs(stepperExerciseStore);

const { addMuscle, removeMuscle, getMuscleById } = stepperExerciseStore;

const { mappedMusclesById } = toRefs(musclesStore);

export const selectMuscle = (id: string) => {
  const isSelected = !!getMuscleById(id);

  if (isSelected) {
    removeMuscle(id);
    return;
  }

  const hasPrimary = exercise.value.muscles.some((item: Muscle) => item.isPrimary);

  const muscle = mappedMusclesById.value.get(id);

  muscle && addMuscle(hasPrimary ? muscle : { ...muscle, isPrimary: true });
};
