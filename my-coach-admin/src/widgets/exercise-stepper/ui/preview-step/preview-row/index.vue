<script setup lang="ts">
import { EditIcon } from '@/shared/ui/icons';
import './styles.scss';

interface Props {
  label: string;
  stepIndex: number;
  edit: (step: number) => void;
}

defineProps<Props>();
</script>

<template>
  <div class="preview-row-wrapper">
    <div class="preview-row-wrapper-label">
      <el-text size="large" class="preview-row-wrapper-label-text">{{ label }}:</el-text>
      <el-button type="primary" link @click="edit(stepIndex)">
        <EditIcon />
      </el-button>
    </div>
    <div class="preview-row-wrapper-content">
      <slot name="content" />
    </div>
  </div>
</template>
