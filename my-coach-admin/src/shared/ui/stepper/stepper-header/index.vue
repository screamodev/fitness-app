<script setup lang="ts">
import CancelButton from './cancel-button';
import './styles.scss';

interface Props {
  title: string;
  onLeave: () => void;
}

defineProps<Props>();
</script>

<template>
  <CancelButton :on-click="onLeave" />
  <div class="stepper-header">
    <el-text class="stepper-header-title">{{ title }}</el-text>
  </div>
</template>
