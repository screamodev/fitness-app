<script setup lang="ts">
import { toRefs } from 'vue';

import './styles.scss';

interface Props {
  title: string;
  content?: string;
  isVerticalDirection?: boolean;
}

const props = defineProps<Props>();

const { title, content, isVerticalDirection } = toRefs(props);
</script>

<template>
  <div :class="`${isVerticalDirection ? 'info-item-vertical' : 'info-item-horizontal'}`">
    <el-text size="large" class="info-item-title">{{ title }}:</el-text>
    <el-text :size="!isVerticalDirection ? 'large' : 'default'" class="info-item-content">
      {{ content }}
    </el-text>
  </div>
</template>
