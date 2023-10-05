<script setup lang="ts">
import type { BannerType } from '@/shared/config/banner';
import './styles.scss';

interface Props {
  type: BannerType;
  title: string;
  subTitle?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="result-banner-wrapper">
    <el-result
      class="result-banner-wrapper-content"
      :icon="type"
      :title="title"
      :sub-title="subTitle"
    />
  </div>
</template>
