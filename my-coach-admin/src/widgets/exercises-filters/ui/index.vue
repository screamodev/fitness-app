<script lang="ts" setup>
import { toRefs } from 'vue';

import {
  ApplyExercisesFilters,
  ClearExercisesFilters,
  FilterTags,
  SelectExerciseType,
  SelectMuscles,
  useSelectedMuscles,
  useSelectedTypes,
} from '@/features/exercises-filters';
import { useExercisesStore } from '@/entities/exercises';
import './styles.scss';

const exercisesStore = useExercisesStore();

const { filteredMusclesId, updateSelectMuscles, filteredMuscles } = useSelectedMuscles();

const { filteredExerciseTypes, updateSelectExerciseTypes } = useSelectedTypes();

const { isFiltersOpen } = toRefs(exercisesStore);
</script>

<template>
  <el-form class="filter-form" ref="formRef" v-if="isFiltersOpen">
    <SelectExerciseType
      :filtered-exercise-types="filteredExerciseTypes"
      :update-select-exercise-types="updateSelectExerciseTypes"
    />
    <SelectMuscles
      :filtered-muscles-id="filteredMusclesId"
      :update-select-muscles="updateSelectMuscles"
    />
    <el-form-item class="buttons-filter">
      <ClearExercisesFilters />
      <ApplyExercisesFilters
        :filtered-exercise-types="filteredExerciseTypes"
        :filtered-muscles="filteredMuscles"
      />
    </el-form-item>
  </el-form>
  <div class="filter-form-tags">
    <FilterTags />
  </div>
</template>
