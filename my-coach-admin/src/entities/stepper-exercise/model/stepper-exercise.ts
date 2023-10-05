import { ref } from 'vue';
import { cloneDeep } from 'lodash';
import { defineStore } from 'pinia';

import type { CreateExercise, ExtendedMedia } from '@/shared/api/exercises';
import type { Media } from '@/shared/api/media';
import type { Muscle } from '@/shared/api/muscles';
import { StoreKey } from '@/shared/config/store';

const initialValues = {
  name: '',
  nameUk: '',
  typeId: '1',
  images: [],
  video: null,
  instruction: '',
  instructionUk: '',
  muscles: [],
};

export const useStepperExerciseStore = defineStore(StoreKey.stepperExercise, () => {
  const exercise = ref<CreateExercise>(cloneDeep(initialValues));

  const setInitialValues = () => {
    exercise.value = cloneDeep(initialValues);
  };

  const setName = (name: string) => {
    exercise.value.name = name;
  };

  const setNameUk = (nameUk: string) => {
    exercise.value.nameUk = nameUk;
  };

  const setPrimaryImage = (primaryImage?: Media) => {
    exercise.value.primaryImage = primaryImage;
  };

  const setType = (typeId: string) => {
    exercise.value.typeId = typeId;
  };

  const setInstruction = (instruction: string) => {
    exercise.value.instruction = instruction;
  };

  const setInstructionUk = (instructionUk: string) => {
    exercise.value.instructionUk = instructionUk;
  };

  const addMuscle = (muscle: Muscle) => {
    exercise.value.muscles.push(muscle);
  };

  const removeMuscle = (id: string) => {
    exercise.value.muscles = exercise.value.muscles.filter((muscle: Muscle) => muscle.id !== id);

    if (
      exercise.value.muscles.length > 0 &&
      !exercise.value.muscles.some((muscle: Muscle) => muscle.isPrimary)
    ) {
      exercise.value.muscles[0] = { ...exercise.value.muscles[0], isPrimary: true };
    }
  };

  const getMuscleById = (id: string) =>
    exercise.value.muscles.find((muscle: Muscle) => muscle.id === id);

  const updateMuscle = (id: string, updatedMuscle: Muscle) => {
    const index = exercise.value.muscles.findIndex((muscle: Muscle) => muscle.id === id);

    if (index === -1) {
      return;
    }

    exercise.value.muscles[index] = updatedMuscle;
  };

  const addImage = (image: ExtendedMedia) => {
    exercise.value.images = [...exercise.value.images, image];
  };

  const removeImage = (id: number) => {
    exercise.value.images = exercise.value.images.filter((image: ExtendedMedia) => image.id !== id);
  };

  const addVideo = (video: Media) => {
    exercise.value.video = video;
  };

  const removeVideo = () => {
    exercise.value.video = null;
  };

  return {
    exercise,
    setName,
    setNameUk,
    setPrimaryImage,
    setType,
    setInstruction,
    setInstructionUk,
    addMuscle,
    removeMuscle,
    getMuscleById,
    updateMuscle,
    addImage,
    removeImage,
    addVideo,
    removeVideo,
    setInitialValues,
  };
});
