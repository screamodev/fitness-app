<script setup lang="ts">
import type { Muscle } from '@/shared/api/muscles';
import { TagSize, TagType } from '@/shared/config/tag';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import { Tag } from '@/shared/ui/tag';
import './styles.scss';

interface Props {
  muscles: Muscle[];
  title: string;
}

const { locale } = useTranslation();

defineProps<Props>();
</script>

<template>
  <div class="muscles-container">
    <el-text size="large" class="muscle-list-title">{{ title }}:</el-text>
    <div class="muscles-tags">
      <Tag
        v-for="muscle in muscles"
        :key="muscle.id"
        :text="String(muscle[`name${getLocaleSuffix(locale)}` as keyof Muscle])"
        :size="TagSize.large"
        :type="muscle.isPrimary ? TagType.primary : TagType.default"
      />
    </div>
  </div>
</template>
