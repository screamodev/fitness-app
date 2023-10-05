<script setup lang="ts">
import type { Media } from '@/shared/api/media';
import { EditIcon } from '@/shared/ui/icons';
import ImageWithPreview from '@/shared/ui/image-with-preview';
import './styles.scss';

interface Props {
  primaryImage?: Media;
  stepIndex: number;
  edit: (step: number) => void;
}

defineProps<Props>();
</script>

<template>
  <div class="preview-image-wrapper">
    <div class="preview-image-wrapper-content">
      <div class="preview-image-wrapper-content-preview">
        <ImageWithPreview
          v-if="primaryImage"
          :url="primaryImage.url"
          alt="preview-image"
          image-class="preview-image-wrapper-content-preview-image"
          icon-class="icon"
        />
        <el-image
          v-else
          class="preview-image-wrapper-content-preview-default-image"
          alt="exercise-placeholder"
          src="/images/exercise-placeholder.png"
        />
      </div>
      <el-button
        class="preview-image-wrapper-content-button"
        type="primary"
        link
        @click="edit(stepIndex)"
      >
        <EditIcon />
      </el-button>
    </div>
  </div>
</template>
