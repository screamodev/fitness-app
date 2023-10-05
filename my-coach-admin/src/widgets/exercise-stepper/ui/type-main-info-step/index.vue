<script setup lang="ts">
import { computed, watch } from 'vue';
import type { UploadUserFile } from 'element-plus';
import { useForm } from 'vee-validate';

import { useNotificationsStore } from '@/entities/notifications';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import { NotificationType } from '@/shared/config/notifications';
import { useTranslation } from '@/shared/lib/localization';
import { getMedia } from '@/shared/lib/upload';
import CustomInput from '@/shared/ui/input';
import { UploadImage } from '@/shared/ui/upload';
import { namesValidationSchema } from './config';
import './styles.scss';

const { meta, values } = useForm({
  validationSchema: namesValidationSchema,
});

const { t } = useTranslation();

const { exercise, setName, setNameUk, setPrimaryImage } = useStepperExerciseStore();

const { addNotification } = useNotificationsStore();

const { name, nameUk } = exercise;

const isNextAvailable = computed<boolean>(() => meta.value.valid);

const emits = defineEmits(['disableNext']);

const setNameValue = () => {
  setName(values.name);
};

const setNameUkValue = () => {
  setNameUk(values.nameUk);
};

const setImage = async (file: UploadUserFile) => {
  try {
    const image = await getMedia(file);

    setPrimaryImage(image);
  } catch (error) {
    if (error instanceof Error) {
      addNotification({
        type: NotificationType.error,
        title: t('notifications.upload.addMediaFailure.title'),
        message: t('errors.upload.readFailed'),
      });
    }
  }
};

const removeImage = () => {
  setPrimaryImage();
};

watch(
  isNextAvailable,
  () => {
    emits('disableNext', isNextAvailable.value);
  },
  { deep: true },
);
</script>

<template>
  <el-form class="form" label-position="top">
    <CustomInput
      name="name"
      size="large"
      :value="name"
      :placeholder="t('placeholders.exercise.name')"
      :label="t('labels.exercise.name')"
      @input="setNameValue"
      :is-required="true"
    />
    <CustomInput
      name="nameUk"
      size="large"
      :value="nameUk"
      :placeholder="t('placeholders.exercise.nameUk')"
      :label="t('labels.exercise.nameUk')"
      @input="setNameUkValue"
      :is-required="true"
    />
    <UploadImage :image="exercise.primaryImage" :change="setImage" :remove="removeImage" />
  </el-form>
</template>
