<script setup lang="ts">
import { TagSize, TagType } from '@/shared/config/tag';
import './styles.scss';

interface Props {
  text: string;
  type: TagType;
  size: TagSize;
}

defineProps<Props>();
</script>

<template>
  <el-tag class="tag" :type="type === TagType.primary ? '' : 'info'" effect="dark" :size="size">
    {{ text }}
  </el-tag>
</template>
