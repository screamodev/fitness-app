<script setup lang="ts">
import { PictureFilled } from '@/shared/ui/icons';
import UploaderPlaceholderLayout from '../uploader-placeholder-layout';

interface Props {
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <UploaderPlaceholderLayout :title="title">
    <template v-slot:icon>
      <PictureFilled />
    </template>
  </UploaderPlaceholderLayout>
</template>
