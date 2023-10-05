<script setup lang="ts">
import './styles.scss';

interface Props {
  imageSrc: string;
}

defineProps<Props>();
</script>

<template>
  <el-dialog class="dialog">
    <img :src="imageSrc" alt="preview-image" class="upload-preview-image" />
  </el-dialog>
</template>
