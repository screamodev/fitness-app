<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import type { UploadUserFile } from 'element-plus';

import type { Media } from '@/shared/api/media';
import { mediaExtensions } from '@/shared/config/media-extensions';
import { useTranslation } from '@/shared/lib/localization';
import { UploaderPlaceholderImage } from '../../uploader-placeholder';
import { UploaderPreview } from '../../uploader-preview';
import { usePreviewImage } from '../lib';
import './styles.scss';

interface Props {
  image?: Media;
  change: (file: UploadUserFile) => void;
  remove: () => void;
}

const props = defineProps<Props>();

const { image } = toRefs(props);

const { t } = useTranslation();

const fileList = ref<UploadUserFile[]>(image?.value ? [image.value] : []);

const { isVisible, imageSrc, preview } = usePreviewImage();

const showUploaderPlaceholder = computed<boolean>(() => fileList.value.length < 1);

watch(
  () => image?.value,
  (newImage) => {
    if (newImage) {
      fileList.value = [newImage];
    } else {
      fileList.value = [];
    }
  },
  { immediate: true },
);
</script>

<template>
  <el-upload
    :file-list="fileList"
    drag
    action="#"
    list-type="picture-card"
    :accept="mediaExtensions.image"
    :limit="1"
    :auto-upload="false"
    :on-preview="preview"
    :on-remove="remove"
    :on-change="change"
    :class="['upload', { 'upload-hidden': !showUploaderPlaceholder }]"
  >
    <UploaderPlaceholderImage :title="t('uploader.image.text')" />
  </el-upload>
  <UploaderPreview v-model="isVisible" :image-src="imageSrc" />
</template>
