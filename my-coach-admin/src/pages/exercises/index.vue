<script setup lang="ts">
import { computed, inject, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { ExercisesFilters } from '@/widgets/exercises-filters';
import { ExercisesList } from '@/widgets/exercises-list';
import { ToggleFiltersView, validateFiltersParams } from '@/features/exercises-filters';
import { ExercisesSearch } from '@/features/exercises-search';
import { Routes, RoutesNames } from '@/shared/config/routes';
import { useTranslation } from '@/shared/lib/localization';
import { AddIcon } from '@/shared/ui/icons';
import './styles.scss';

const router = useRouter();

const { t } = useTranslation();

const isValid = ref<boolean>(false);

const queryParameters = computed(() => router.currentRoute.value.query);

const isExerciseDataLoaded = inject('isExerciseDataLoaded', ref<boolean>(false));

watchEffect(() => {
  if (!isExerciseDataLoaded.value) {
    isValid.value = validateFiltersParams(queryParameters.value);

    if (!isValid.value) {
      router.push({ name: RoutesNames.notFound });
    }
  }
});
</script>

<template>
  <div class="exercises-page-actions">
    <div class="exercises-page-actions-buttons">
      <ToggleFiltersView class="toggle-filters" />
      <router-link :to="Routes.createExercise">
        <el-button class="create-exercise-button" size="large">
          <AddIcon />
          {{ t('exercises.create') }}
        </el-button>
      </router-link>
    </div>
    <ExercisesSearch />
  </div>
  <ExercisesFilters />
  <ExercisesList v-if="isValid" />
</template>
