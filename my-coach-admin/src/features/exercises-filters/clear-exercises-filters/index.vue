<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useExercisesStore } from '@/entities/exercises';
import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

const router = useRouter();

const { t } = useTranslation();

const { clearFilters } = useExercisesStore();

const onClearFilters = () => {
  clearFilters();

  router.push({ query: {} });
};
</script>

<template>
  <el-button class="clear-filter" @click="onClearFilters">
    {{ t('exercisesFilter.clear') }}
  </el-button>
</template>
