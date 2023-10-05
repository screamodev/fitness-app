<script setup lang="ts">
import { toRefs } from 'vue';

import { useExercisesStore } from '@/entities/exercises';
import type { ExerciseType } from '@/shared/api/exercise-types';
import type { Muscle } from '@/shared/api/muscles';
import { TagSize, TagType } from '@/shared/config/tag';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import { Tag } from '@/shared/ui/tag';
import './styles.scss';

const { locale } = useTranslation();

const exercisesStore = useExercisesStore();

const { exerciseFilters } = toRefs(exercisesStore);
</script>

<template>
  <Tag
    v-for="type in exerciseFilters.types"
    :key="type.id"
    :text="String(type[`name${getLocaleSuffix(locale)}` as keyof ExerciseType])"
    :size="TagSize.large"
    :type="TagType.primary"
    class="filter-tag-type"
  />
  <Tag
    v-for="filteredMuscle in exerciseFilters.muscles"
    :key="filteredMuscle.id"
    :text="String(filteredMuscle[`name${getLocaleSuffix(locale)}` as keyof Muscle])"
    :size="TagSize.large"
    :type="TagType.primary"
    class="filter-tag-muscle"
  />
</template>
