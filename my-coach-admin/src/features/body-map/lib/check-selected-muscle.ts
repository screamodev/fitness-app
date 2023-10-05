import type { Muscle } from '@/shared/api/muscles';

export const checkIfIsMainSelectedMuscle = (id: string, selectedMuscles: Muscle[]): boolean =>
  !!selectedMuscles.filter((muscle: Muscle) => muscle.id === id && muscle.isPrimary).length;

export const checkIfIsAdditionalSelectedMuscle = (id: string, selectedMuscles: Muscle[]): boolean =>
  !!selectedMuscles.filter((muscle: Muscle) => muscle.id === id && !muscle.isPrimary).length;
