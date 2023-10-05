<script lang="ts" setup>
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

import { useLoadExercises } from '@/features/exercises';
import { ExerciseRow, useExercisesStore } from '@/entities/exercises';
import { Routes } from '@/shared/config/routes';
import { useTranslation } from '@/shared/lib/localization';
import { Pagination } from '@/shared/ui/pagination';
import './styles.scss';

const router = useRouter();

const { t } = useTranslation();

const { page, totalItems, isLoading, pageSize } = useLoadExercises();

const exercisesStore = useExercisesStore();

const { exercisesList } = toRefs(exercisesStore);

const setPage = (newPage: number) => {
  page.value = newPage;
};

const openExercise = (id: number) => {
  router.push(`${Routes.exercises}/${id}`);
};

const actions = [
  { titleKey: 'buttons.edit' },
  { titleKey: 'buttons.duplicate' },
  { titleKey: 'buttons.delete' },
];
</script>

<template>
  <el-table
    :data="exercisesList"
    v-loading="isLoading"
    header-row-class-name="table-header"
    :empty-text="t('exercises.empty')"
  >
    <ExerciseRow id="id" name="name" name-uk="nameUk" :actions="actions" :on-click="openExercise" />
  </el-table>
  <Pagination :total="totalItems" :page-size="pageSize" :onSelectPage="setPage" />
</template>
