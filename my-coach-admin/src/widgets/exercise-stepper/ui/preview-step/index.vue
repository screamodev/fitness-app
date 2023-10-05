<script setup lang="ts">
import { computed } from 'vue';

import { useExerciseTypesStore } from '@/entities/exercise-types';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import type { ExerciseType } from '@/shared/api/exercise-types';
import type { Muscle } from '@/shared/api/muscles';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import PreviewImage from './preview-image';
import PreviewMedia from './preview-media';
import PreviewMuscles from './preview-muscles';
import PreviewRow from './preview-row';
import './styles.scss';

const { exercise } = useStepperExerciseStore();

const { exerciseTypes } = useExerciseTypesStore();

const { t, locale } = useTranslation();

const { name, nameUk, instruction, instructionUk, primaryImage, typeId, muscles, images, video } =
  exercise;

const type = computed<ExerciseType>(
  () => exerciseTypes.find((type) => type.id === typeId) || exerciseTypes[0],
);

const filteredMuscles = computed<Muscle[]>(() => {
  const primaryMuscles = muscles.filter((muscle: Muscle) => muscle.isPrimary);

  const additionalMuscles = muscles.filter((muscle: Muscle) => !muscle.isPrimary);

  return primaryMuscles.concat(additionalMuscles);
});

const emits = defineEmits(['goTo']);

const goToStep = (value: number) => {
  emits('goTo', value);
};
</script>

<template>
  <div class="preview-wrapper">
    <div class="preview-wrapper-main-info">
      <PreviewImage :primary-image="primaryImage" :edit="goToStep" :stepIndex="0"></PreviewImage>
      <div class="preview-wrapper-main-info-content">
        <PreviewRow :label="t('exercise.name')" :edit="goToStep" :step-index="0">
          <template v-slot:content>
            <el-text class="content-text">{{ name }} / {{ nameUk }}</el-text>
          </template>
        </PreviewRow>
        <PreviewRow :label="t('exercise.type')" :edit="goToStep" :step-index="2" v-if="type">
          <template v-slot:content>
            <el-text class="content-text">
              {{ String(type[`name${getLocaleSuffix(locale)}` as keyof ExerciseType]) }}
            </el-text>
          </template>
        </PreviewRow>
        <PreviewRow :label="t('exercise.muscles')" :edit="goToStep" :stepIndex="1">
          <template v-slot:content>
            <PreviewMuscles :muscles="filteredMuscles" />
          </template>
        </PreviewRow>
      </div>
    </div>
    <PreviewRow :label="t('labels.exercise.instruction')" :edit="goToStep" :step-index="2">
      <template v-slot:content>
        <el-text class="content-text">
          {{ instruction }}
        </el-text>
        <el-text class="blank-instruction" v-if="!instruction?.length">
          {{ t('placeholders.exercise.blankInstruction') }}
        </el-text>
      </template>
    </PreviewRow>
    <PreviewRow :label="t('labels.exercise.instructionUk')" :edit="goToStep" :step-index="2">
      <template v-slot:content>
        <el-text class="content-text">
          {{ instruction }}
        </el-text>
        <el-text class="blank-instruction" v-if="!instructionUk?.length">
          {{ t('placeholders.exercise.blankInstructionUk') }}
        </el-text>
      </template>
    </PreviewRow>
    <PreviewRow :label="t('labels.exercise.media')" :edit="goToStep" :step-index="3">
      <template v-slot:content>
        <PreviewMedia :images="images" :video="video" />
      </template>
    </PreviewRow>
  </div>
</template>
