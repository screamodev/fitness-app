import { PrismaClient } from '@prisma/client';

const exerciseTypes = [
  { name: 'With repetitions', nameUk: 'З повторюваннями' },
  { name: 'With weight and repetitions', nameUk: 'З вагою та повторюваннями' },
  { name: 'With time', nameUk: 'З часом' },
  { name: 'With weight and time', nameUk: 'З вагою та часом' },
];

export const createExerciseTypes = async (prisma: PrismaClient) => {
  return prisma.exerciseType.createMany({
    data: exerciseTypes,
  });
};
