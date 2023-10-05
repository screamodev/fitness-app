import { PrismaClient } from '@prisma/client';

import { createExerciseTypes } from './exercise-types';
import { createMuscles } from './muscles';

const prisma = new PrismaClient();

async function main() {
  try {
    await createExerciseTypes(prisma);
    await createMuscles(prisma);

    console.log('Data created successfully.');
  } catch (error) {
    console.error('Error creating seeds:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
