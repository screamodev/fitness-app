<script setup lang="ts">
import type { UploadUserFile } from 'element-plus';

import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import { exerciseLimits } from '@/entities/stepper-exercise/config';
import { useTranslation } from '@/shared/lib/localization';
import { UploadImagesWall, UploadVideo } from '@/shared/ui/upload';
import { addExerciseImage, removeExerciseImage, setExerciseVideo } from './lib';
import './styles.scss';

const { exercise, removeVideo } = useStepperExerciseStore();

const { t } = useTranslation();

const handleAddImage = (file: UploadUserFile) => {
  addExerciseImage(file, t);
};

const handleRemoveImage = (file: UploadUserFile) => {
  removeExerciseImage(file, t);
};

const handleSetVideo = (file: UploadUserFile) => {
  setExerciseVideo(file, t);
};
</script>

<template>
  <el-space direction="vertical" alignment="normal" class="container">
    <el-card shadow="never" class="images">
      <h4>{{ t('labels.upload.images') }}</h4>
      <UploadImagesWall
        :images="exercise.images"
        :limit="exerciseLimits.uploadMedia.images.max"
        :change="handleAddImage"
        :remove="handleRemoveImage"
      />
    </el-card>
    <el-card shadow="never" class="video">
      <h4>{{ t('labels.upload.video') }}</h4>
      <UploadVideo :video="exercise.video" :change="handleSetVideo" :remove="removeVideo" />
    </el-card>
  </el-space>
</template>
