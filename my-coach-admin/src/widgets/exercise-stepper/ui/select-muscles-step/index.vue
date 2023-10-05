<script setup lang="ts">
import { computed, toRefs, watch } from 'vue';

import BodyMap from '@/features/body-map';
import MusclesList from '@/features/muscles-list';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import type { Muscle } from '@/shared/api/muscles';
import { selectMuscle } from './lib';
import './styles.scss';

const { exercise } = useStepperExerciseStore();

const { muscles } = toRefs(exercise);

const isNextAvailable = computed<boolean>(
  () => !!muscles.value.filter((muscle: Muscle) => muscle.isPrimary).length,
);

const emits = defineEmits(['disableNext']);

const updateIsNextAvailable = () => {
  emits('disableNext', isNextAvailable.value);
};

watch(isNextAvailable, updateIsNextAvailable, { immediate: true });
</script>

<template>
  <div class="select-muscles-wrapper">
    <BodyMap :select-muscle="selectMuscle" :selected-muscles="muscles" />
    <MusclesList :selected-muscles="muscles" />
  </div>
</template>
