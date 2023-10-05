<script setup lang="ts">
import { VideoCameraFilled } from '@/shared/ui/icons';
import UploaderPlaceholderLayout from '../uploader-placeholder-layout';
import './styles.scss';

interface Props {
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="video-placeholder">
    <UploaderPlaceholderLayout :title="title">
      <template v-slot:icon>
        <VideoCameraFilled />
      </template>
    </UploaderPlaceholderLayout>
  </div>
</template>
