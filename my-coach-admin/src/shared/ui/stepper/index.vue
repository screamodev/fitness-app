<script setup lang="ts">
import { computed, ref } from 'vue';

import type { Step } from '@/shared/config/step';
import { useTranslation } from '@/shared/lib/localization';
import StepperFooter from './stepper-footer';
import StepperHeader from './stepper-header';
import './styless.scss';

interface Props {
  steps: Step[];
  title: string;
  onSubmit: () => void;
  onLeave: () => void;
}

const props = defineProps<Props>();

const { t } = useTranslation();

const currentStep = ref<number>(0);

const disabledNext = ref<boolean>(true);

const isFinalStep = computed<boolean>(() => currentStep.value === props.steps.length - 1);

const goToNext = () => {
  currentStep.value++;
};

const goToPrev = () => {
  currentStep.value--;
};

const goTo = (step: number) => {
  currentStep.value = step;
};

const stepHeading = computed<string>(() => {
  return (
    {
      0: t('stepper.mainInfoStep.title'),
      1: t('stepper.selectMusclesStep.title'),
      2: t('stepper.instructionStep.title'),
      3: t('stepper.uploadMediaStep.title'),
      4: t('stepper.previewStep.title'),
    }[currentStep.value] || ''
  );
});

const setDisabledNext = (isNextAvailable: boolean) => {
  disabledNext.value = !isNextAvailable;
};
</script>

<template>
  <div class="stepper-wrapper">
    <div class="stepper-wrapper-form">
      <StepperHeader :title="title" :on-leave="onLeave" />
      <div class="stepper-wrapper-form-content">
        <el-steps :active="currentStep">
          <el-step
            v-for="{ transTitleKey, transDescriptionKey } in steps"
            :key="transTitleKey"
            :title="t(transTitleKey)"
            :description="t(transDescriptionKey)"
          />
        </el-steps>
        <el-text size="large" class="heading-step">{{ stepHeading }}</el-text>
        <div class="stepper-wrapper-form-content-body">
          <component
            :is="steps[currentStep].component"
            @disable-next="setDisabledNext"
            @go-to="goTo"
          />
        </div>
      </div>
      <StepperFooter
        :displayed-prev="currentStep !== 0"
        :disabled-next="disabledNext"
        :next-button-title="isFinalStep ? t('buttons.create') : t('buttons.next')"
        :go-to-next="isFinalStep ? onSubmit : goToNext"
        :go-to-prev="goToPrev"
      />
    </div>
  </div>
</template>
