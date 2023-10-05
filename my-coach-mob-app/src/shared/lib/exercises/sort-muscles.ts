import { MuscleType } from 'shared/api/muscles';

export const sortMuscles = (muscles: MuscleType[]) => {
  const musclesCopy = [...muscles];

  return musclesCopy.sort((firstMuscle, secondMuscle) =>
    firstMuscle.isPrimary === secondMuscle.isPrimary ? 0 : firstMuscle.isPrimary ? -1 : 1,
  );
};
