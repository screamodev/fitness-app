<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Routes } from '@/shared/config/routes';
import Stepper from '@/shared/ui/stepper';
import { createExerciseSteps } from '../config';

interface Props {
  title: string;
  onSubmit: () => void;
}

defineProps<Props>();

const router = useRouter();

const onLeave = () => {
  router.push(Routes.exercises);
};
</script>

<template>
  <Stepper :steps="createExerciseSteps" :title="title" :on-leave="onLeave" :on-submit="onSubmit" />
</template>
