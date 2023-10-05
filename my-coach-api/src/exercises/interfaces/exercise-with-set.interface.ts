import { Exercise, Set } from '@prisma/client';

export interface ExerciseWithSet extends Exercise, Set {}
