<script setup lang="ts">
import { computed } from 'vue';

import ExerciseManageCard from '@/widgets/exercise-manage-card';
import { useLoadExercise } from '@/features/exercises';
import type { ExerciseType } from '@/shared/api/exercise-types';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import InfoItem from '@/shared/ui/info-item';
import MediaViewer from '@/shared/ui/medias-viewer';
import './styles.scss';

const { t, locale } = useTranslation();

const { exercise, isLoading } = useLoadExercise();

const isMediaExist = computed(() => exercise.value?.medias.length);

const images = computed(
  () => exercise.value?.medias.filter(({ type }) => type === 'image') ?? undefined,
);

const video = computed(() => exercise.value?.medias.find(({ type }) => type === 'video') ?? null);
</script>

<template>
  <el-space
    v-loading="isLoading"
    alignment="normal"
    direction="vertical"
    class="container"
    v-if="exercise"
  >
    <ExerciseManageCard
      v-if="exercise"
      :title="exercise.name"
      :title-uk="exercise.nameUk"
      :muscles="exercise.muscles"
      :image="exercise.primaryImage"
    />
    <div class="exercise-info">
      <InfoItem
        v-if="exercise?.type"
        :title="t('exercise.type')"
        :content="String(exercise?.type[`name${getLocaleSuffix(locale)}` as keyof ExerciseType])"
        :is-vertical-direction="true"
      />
      <InfoItem
        v-if="exercise?.instruction"
        :title="t('exercise.instruction')"
        :content="exercise?.instruction"
        :is-vertical-direction="true"
      />
      <InfoItem
        v-if="exercise?.instructionUk"
        :title="t('exercise.instructionUk')"
        :content="exercise?.instructionUk"
        :is-vertical-direction="true"
      />
    </div>
    <MediaViewer v-if="isMediaExist" :title="t('exercise.media')" :images="images" :video="video" />
  </el-space>
</template>
