import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import type { Muscle } from '@/shared/api/muscles';

const { updateMuscle } = useStepperExerciseStore();

export const changeMuscle = (muscle: Muscle) => {
  if (muscle.isPrimary) {
    const { isPrimary, ...updatedMuscle } = muscle;

    updateMuscle(muscle.id, updatedMuscle);
  } else {
    updateMuscle(muscle.id, { ...muscle, isPrimary: true });
  }
};
