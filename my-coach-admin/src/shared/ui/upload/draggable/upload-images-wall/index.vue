<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import type { UploadUserFile } from 'element-plus';

import type { ExtendedMedia } from '@/shared/api/exercises';
import { mediaExtensions } from '@/shared/config/media-extensions';
import { useTranslation } from '@/shared/lib/localization';
import { UploaderPlaceholderImage } from '../../uploader-placeholder';
import { UploaderPreview } from '../../uploader-preview';
import { convertToUploadFiles, usePreviewImage } from '../lib';
import './styles.scss';

interface Props {
  images: ExtendedMedia[];
  limit: number;
  change: (file: UploadUserFile) => void;
  remove: (file: UploadUserFile) => void;
}

const props = defineProps<Props>();

const { t } = useTranslation();

const { isVisible, imageSrc, preview } = usePreviewImage();

const { images } = toRefs(props);

const fileList = ref<UploadUserFile[]>(convertToUploadFiles(images.value));

const showUploaderPlaceholder = computed<boolean>(() => fileList.value.length < props.limit);

watch(
  images,
  (newImages) => {
    fileList.value = convertToUploadFiles(newImages);
  },
  { immediate: true },
);
</script>

<template>
  <el-upload
    :class="['images-uploader', { 'upload-hidden': !showUploaderPlaceholder }]"
    :file-list="fileList"
    drag
    action="#"
    list-type="picture-card"
    :accept="mediaExtensions.image"
    :multiple="true"
    :limit="limit"
    :on-preview="preview"
    :auto-upload="false"
    :on-change="change"
    :on-remove="remove"
  >
    <UploaderPlaceholderImage :title="t('uploader.image.text')" />
  </el-upload>
  <UploaderPreview v-model="isVisible" :image-src="imageSrc" />
</template>
