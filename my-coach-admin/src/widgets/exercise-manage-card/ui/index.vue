<script setup lang="ts">
import { computed, toRefs } from 'vue';

import type { Media } from '@/shared/api/media';
import type { Muscle } from '@/shared/api/muscles';
import { useTranslation } from '@/shared/lib/localization';
import { ActionsDropdown } from '@/shared/ui/actions-dropdown';
import { DetailsIcon } from '@/shared/ui/icons';
import ImageWithPreview from '@/shared/ui/image-with-preview';
import InfoItem from '@/shared/ui/info-item';
import MuscleList from '@/shared/ui/muscle-list';
import './styles.scss';

interface Props {
  title: string;
  titleUk: string;
  muscles: Muscle[];
  image?: Media | null;
}

const { t } = useTranslation();

const props = defineProps<Props>();

const { muscles } = toRefs(props);

const primaryMuscles = computed(() => muscles.value.filter((muscle: Muscle) => muscle.isPrimary));

const additionalMuscles = computed(() =>
  muscles.value.filter((muscle: Muscle) => !muscle.isPrimary),
);

const actions = [
  { titleKey: 'buttons.edit' },
  { titleKey: 'buttons.duplicate' },
  { titleKey: 'buttons.delete' },
];
</script>

<template>
  <div class="exercise-manage">
    <div class="image-container">
      <ImageWithPreview
        :url="image?.url ?? '/images/exercise-placeholder.png'"
        alt="exercise-image"
        image-class="image"
        icon-class="icon"
      />
    </div>
    <div class="content">
      <div class="main-info">
        <InfoItem :title="t('exercise.name')" :content="title" />
        <InfoItem :title="t('exercise.nameUk')" :content="titleUk" />
        <MuscleList :muscles="primaryMuscles" :title="t('exercise.mainMuscles')" />
        <MuscleList
          v-if="additionalMuscles.length"
          :muscles="additionalMuscles"
          :title="t('exercise.additionalMuscles')"
        />
      </div>
      <div class="controls">
        <ActionsDropdown :items="actions">
          <template v-slot:icon>
            <DetailsIcon />
          </template>
        </ActionsDropdown>
      </div>
    </div>
  </div>
</template>
