<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import type { Muscle } from '@/shared/api/muscles';
import type { DraggableChangeEvent } from '@/shared/config/draggable';
import { TagSize, TagType } from '@/shared/config/tag';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import { Tag } from '@/shared/ui/tag';
import { changeMuscle, getAdditionalMuscles, getMainMuscles } from './lib';
import './styles.scss';

interface Props {
  selectedMuscles: Muscle[];
}

const props = defineProps<Props>();

const { selectedMuscles } = toRefs(props);

const { t, locale } = useTranslation();

const stepperExerciseStore = useStepperExerciseStore();

const { exercise } = toRefs(stepperExerciseStore);

const { removeMuscle } = stepperExerciseStore;

const mainMuscles = ref<Muscle[]>(getMainMuscles(selectedMuscles.value));

const additionalMuscles = ref<Muscle[]>(getAdditionalMuscles(selectedMuscles.value));

const isMainMusclesShown = computed<boolean>(() => !!mainMuscles.value.length);

const isAdditionalMusclesShown = computed<boolean>(() => !!additionalMuscles.value.length);

const change = (action: DraggableChangeEvent<Muscle>) => {
  if (action.added) {
    const muscle = action.added.element;

    changeMuscle(muscle);
  }

  if (action.moved) {
    exercise.value.muscles = [...mainMuscles.value, ...additionalMuscles.value];
  }
};

watch(
  exercise,
  (exercise) => {
    mainMuscles.value = getMainMuscles(exercise.muscles);

    additionalMuscles.value = getAdditionalMuscles(exercise.muscles);
  },
  { deep: true },
);
</script>

<template>
  <div class="muscles-list-wrapper">
    <div class="muscles-list-wrapper-content">
      <el-text size="large" class="main-muscles-label">{{ t('exercise.mainMuscles') }}</el-text>
      <span class="required">*</span>
      <div v-if="!isMainMusclesShown">
        <el-text size="small" class="main-muscles-empty">
          ({{ t('stepper.emptyMainMuscles') }})
        </el-text>
      </div>
      <div class="muscles-list-wrapper-content-tags">
        <VueDraggableNext
          v-model="mainMuscles"
          group="mainMuscles"
          class="draggable-wrapper-main-muscles"
          @change="change"
        >
          <Tag
            v-for="muscle in mainMuscles"
            :key="muscle.id"
            :text="String(muscle[`name${getLocaleSuffix(locale)}` as keyof Muscle])"
            :size="TagSize.large"
            :type="TagType.primary"
            class="tag"
            closable
            @close="removeMuscle(muscle.id)"
          />
        </VueDraggableNext>
      </div>
    </div>
    <div class="muscles-list-wrapper-content">
      <el-text size="large" class="additional-muscles-label">
        {{ t('exercise.additionalMuscles') }}
      </el-text>
      <div v-if="!isAdditionalMusclesShown">
        <el-text size="small" class="additional-muscles-empty">
          ({{ t('stepper.emptyAdditionalMuscles') }})
        </el-text>
      </div>
      <div class="muscles-list-wrapper-content-tags">
        <VueDraggableNext
          v-model="additionalMuscles"
          group="mainMuscles"
          class="draggable-wrapper-additional-muscles"
          @change="change"
        >
          <Tag
            v-for="muscle in additionalMuscles"
            :key="muscle.id"
            :text="String(muscle[`name${getLocaleSuffix(locale)}` as keyof Muscle])"
            :size="TagSize.large"
            :type="TagType.default"
            class="tag"
            closable
            @close="removeMuscle(muscle.id)"
          />
        </VueDraggableNext>
      </div>
    </div>
  </div>
</template>
