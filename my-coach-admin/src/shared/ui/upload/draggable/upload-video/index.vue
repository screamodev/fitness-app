<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import type { UploadUserFile } from 'element-plus';

import type { Media } from '@/shared/api/media';
import { useTranslation } from '@/shared/lib/localization';
import { UploaderPlaceholderVideo } from '../../uploader-placeholder';
import VideoPreview from './video-preview';
import './styles.scss';

interface Props {
  video: Media | null;
  change: (file: UploadUserFile) => void;
  remove: () => void;
}

const props = defineProps<Props>();

const { video } = toRefs(props);

const { t } = useTranslation();

const fileList = ref<UploadUserFile[]>(video.value ? [video.value] : []);

watch(
  () => video.value,
  (newVideo) => {
    if (newVideo) {
      fileList.value = [newVideo];
    } else {
      fileList.value = [];
    }
  },
  { immediate: true },
);
</script>

<template>
  <VideoPreview :video-src="video.url" v-if="video" @click.stop class="video-preview" />
  <el-upload
    :file-list="fileList"
    drag
    action="#"
    list-type="picture"
    accept="video/*"
    :limit="1"
    :auto-upload="false"
    :on-remove="remove"
    :on-change="change"
    class="upload-video"
  >
    <UploaderPlaceholderVideo v-if="!fileList.length" :title="t('uploader.video.text')" />
  </el-upload>
</template>
