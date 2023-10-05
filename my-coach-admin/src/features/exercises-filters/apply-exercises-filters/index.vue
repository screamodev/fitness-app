<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

import { useExercisesStore } from '@/entities/exercises';
import type { ExerciseType } from '@/shared/api/exercise-types';
import type { Muscle } from '@/shared/api/muscles';
import { useTranslation } from '@/shared/lib/localization';
import { addFiltersToQuery } from './lib';
import './styles.scss';

interface Props {
  filteredMuscles: Muscle[];
  filteredExerciseTypes: ExerciseType[];
}

const props = defineProps<Props>();

const { filteredMuscles, filteredExerciseTypes } = toRefs(props);

const router = useRouter();

const { t } = useTranslation();

const { setFilters } = useExercisesStore();

const applyFilters = () => {
  setFilters({ types: filteredExerciseTypes.value, muscles: filteredMuscles.value });

  addFiltersToQuery(router, filteredExerciseTypes.value, filteredMuscles.value);
};
</script>

<template>
  <el-button type="primary" class="apply-filter" @click="applyFilters">
    {{ t('exercisesFilter.apply') }}
  </el-button>
</template>
