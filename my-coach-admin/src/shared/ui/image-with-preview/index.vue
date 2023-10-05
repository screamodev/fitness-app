<script setup lang="ts">
import { Zoom } from '@/shared/ui/icons';
import './styles.scss';

interface Props {
  url: string;
  alt: string;
  imageClass?: string;
  iconClass?: string;
}

defineProps<Props>();
</script>

<template>
  <el-image
    :class="['image', imageClass]"
    :alt="alt"
    :src="url"
    :preview-src-list="[url]"
    :hide-on-click-modal="true"
  >
  </el-image>
  <div :class="['zoom-icon-wrapper', iconClass]">
    <Zoom />
  </div>
</template>
