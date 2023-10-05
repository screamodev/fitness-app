<script setup lang="ts">
import type { Muscle } from '@/shared/api/muscles';
import { TagSize, TagType } from '@/shared/config/tag';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import { Tag } from '@/shared/ui/tag';
import './styles.scss';

interface Props {
  muscles: Muscle[];
}

defineProps<Props>();

const { locale } = useTranslation();
</script>

<template>
  <div class="preview-muscles-wrapper">
    <Tag
      class="preview-muscles-wrapper-tag"
      v-for="muscle in muscles"
      :key="muscle.name"
      :size="TagSize.default"
      :text="String(muscle[`name${getLocaleSuffix(locale)}` as keyof Muscle])"
      :type="muscle.isPrimary ? TagType.primary : TagType.default"
    />
  </div>
</template>
