<script setup lang="ts">
import { computed, toRefs } from 'vue';

import type { Media } from '@/shared/api/media';
import { useTranslation } from '@/shared/lib/localization';
import ImageWithPreview from '@/shared/ui/image-with-preview';
import './styles.scss';

interface Props {
  images: Media[];
  video?: Media | null;
}

const { t } = useTranslation();

const props = defineProps<Props>();

const { images, video } = toRefs(props);

const isEmptyMedias = computed<boolean>(() => !images.value.length && !video?.value);
</script>

<template>
  <div class="preview-media-wrapper">
    <div class="preview-media-wrapper-block" v-if="video">
      <video class="preview-media-wrapper-block-video" controls>
        <source :src="video?.url" type="video/mp4" />
      </video>
    </div>
    <div class="image-block image-block-hover" v-for="({ url }, index) in images" :key="index">
      <ImageWithPreview :url="url" alt="preview-image" image-class="image" icon-class="icon" />
    </div>
    <el-text class="preview-media-wrapper-blank-medias" v-if="isEmptyMedias">
      ({{ t('placeholders.exercise.blankMedia') }})
    </el-text>
  </div>
</template>
