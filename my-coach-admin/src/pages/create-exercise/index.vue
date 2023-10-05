<script setup lang="ts">
import { useRouter } from 'vue-router';

import { ExerciseStepper } from '@/widgets/exercise-stepper';
import { useNotificationsStore } from '@/entities/notifications';
import { useCreateExercise, useStepperExerciseStore } from '@/entities/stepper-exercise';
import type { CreateExerciseResponse } from '@/shared/api/exercises';
import { NotificationType } from '@/shared/config/notifications';
import { Routes } from '@/shared/config/routes';
import { RoutesNames } from '@/shared/config/routes';
import { useLeavePage } from '@/shared/lib/confirms';
import { useTranslation } from '@/shared/lib/localization';

const router = useRouter();

const { t } = useTranslation();

const { setInitialValues, exercise } = useStepperExerciseStore();

const { addNotification } = useNotificationsStore();

const { createExercise } = useCreateExercise();

useLeavePage(setInitialValues);

const handleCreateExercise = async () => {
  try {
    await createExercise(exercise).then((response) => {
      const { data } = response as CreateExerciseResponse;

      const exerciseId = +data.createExercise.id;

      if (isNaN(exerciseId)) {
        router.push({ name: RoutesNames.notFound });
        return;
      }

      router.push(`${Routes.exercises}/${exerciseId}`);
    });
  } catch (error) {
    addNotification({
      type: NotificationType.error,
      title: t('notifications.upload.processingMediaFailure.title'),
      message: t('notifications.upload.processingMediaFailure.message'),
    });
  }
};
</script>

<template>
  <ExerciseStepper :title="t('createExercise.title')" :on-submit="handleCreateExercise" />
</template>
