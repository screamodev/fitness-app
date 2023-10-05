<script setup lang="ts">
import { computed } from 'vue';

import type { Muscle } from '@/shared/api/muscles';
import { BodyBack } from './body-back';
import { BodyFront } from './body-front';
import type { MuscleComponent } from './config';
import { backBodyParts, frontBodyParts } from './config';
import { mapMusclesToComponents } from './lib';
import './styles.scss';

interface Props {
  selectedMuscles: Muscle[];
  selectMuscle?: (id: string) => void;
}

defineProps<Props>();

const backMusclesComponents = computed<MuscleComponent[]>(() =>
  mapMusclesToComponents(backBodyParts),
);

const frontMusclesComponents = computed<MuscleComponent[]>(() =>
  mapMusclesToComponents(frontBodyParts),
);
</script>

<template>
  <div class="body-map-wrapper">
    <div class="body-map-wrapper-body">
      <BodyFront
        :select-muscle="selectMuscle"
        :selected-muscles="selectedMuscles"
        :muscles-components="frontMusclesComponents"
      />
    </div>
    <div class="body-map-wrapper-body">
      <BodyBack
        :select-muscle="selectMuscle"
        :selected-muscles="selectedMuscles"
        :muscles-components="backMusclesComponents"
      />
    </div>
  </div>
</template>
