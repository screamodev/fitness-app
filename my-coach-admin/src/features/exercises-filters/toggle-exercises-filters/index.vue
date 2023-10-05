<script setup lang="ts">
import { useExercisesStore } from '@/entities/exercises';
import { useTranslation } from '@/shared/lib/localization';
import { FilterIcon } from '@/shared/ui/icons';

const { t } = useTranslation();

const { toggleFilters } = useExercisesStore();
</script>

<template>
  <el-button size="large" @click="toggleFilters">
    <FilterIcon />
    {{ t('exercises.filters') }}
  </el-button>
</template>
