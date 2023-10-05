<script setup lang="ts">
import './styles.scss';

interface Props {
  icon?: boolean;
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="layout-container">
    <el-icon class="el-icon--upload">
      <slot name="icon"></slot>
    </el-icon>
    <el-text class="placeholder-text" size="small">{{ title }}</el-text>
  </div>
</template>
