<script lang="ts" setup>
import { toRefs } from 'vue';

import { useExerciseTypesStore } from '@/entities/exercise-types';
import type { ExerciseType } from '@/shared/api/exercise-types';
import { useTranslation } from '@/shared/lib/localization';
import Select from '@/shared/ui/select';
import './styles.scss';

interface Props {
  filteredExerciseTypes: ExerciseType[];
  updateSelectExerciseTypes: (type: ExerciseType[]) => void;
}

defineProps<Props>();

const { t } = useTranslation();

const exerciseTypesStore = useExerciseTypesStore();

const { exerciseTypes } = toRefs(exerciseTypesStore);
</script>

<template>
  <el-form-item :label="t('labels.exercise.types')" class="exercise-type-filter">
    <Select
      class="exercise-type-filter-select"
      :value="filteredExerciseTypes"
      :options="exerciseTypes"
      :placeholder="t('placeholders.exercises.selectType')"
      @update-value="updateSelectExerciseTypes"
    />
  </el-form-item>
</template>
