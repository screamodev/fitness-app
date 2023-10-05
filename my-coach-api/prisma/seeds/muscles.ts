import { PrismaClient } from '@prisma/client';

const muscles = [
  { name: 'Abdominals', nameUk: 'М’язи пресу' },
  { name: 'Obliques', nameUk: 'Косі м’язи живота' },
  { name: 'Forearms', nameUk: 'Передпліччя' },
  { name: 'Biceps', nameUk: 'Біцепс' },
  { name: 'Shoulders', nameUk: 'Плечі' },
  { name: 'Trapeze', nameUk: 'Трапеція' },
  { name: 'Chest', nameUk: 'Груди' },
  { name: 'Quads', nameUk: 'Квадрицепси' },
  { name: 'Calves', nameUk: 'Iкри' },
  { name: 'Hamstrings', nameUk: 'Підколінні м’язи' },
  { name: 'Lowerback', nameUk: 'Поперечні м’язи' },
  { name: 'Glutes', nameUk: 'М’язи сідниць' },
  { name: 'Lats', nameUk: 'Широкий м’яз' },
  { name: 'Trapeze middle', nameUk: 'Середня трапеція' },
  { name: 'Triceps', nameUk: 'Трицепс' },
];

export const createMuscles = async (prisma: PrismaClient) => {
  return prisma.muscle.createMany({
    data: muscles,
  });
};
