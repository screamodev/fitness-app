<script setup lang="ts">
import { toRefs } from 'vue';

import type { Media } from '@/shared/api/media';
import ImageWithPreview from '@/shared/ui/image-with-preview';
import './styles.scss';

interface Props {
  title?: string;
  images?: Media[];
  video?: Media | null;
}

const props = defineProps<Props>();

const { images, video } = toRefs(props);
</script>

<template>
  <div class="media-container">
    <el-text size="large">{{ title }}:</el-text>
    <div class="images" v-if="images">
      <div class="image-container" v-for="image in images" :key="image.name">
        <ImageWithPreview
          :url="image?.url ?? '/images/exercise-placeholder.png'"
          alt="exercise-image"
          icon-class="icon"
          image-class="image"
        />
      </div>
    </div>
    <div class="video-container" v-if="video">
      <video class="video" controls>
        <source :src="video?.url" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
