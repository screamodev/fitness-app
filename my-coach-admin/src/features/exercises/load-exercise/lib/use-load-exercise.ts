import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useNotificationsStore } from '@/entities/notifications';
import { type Exercise, useGetExerciseQuery } from '@/shared/api/exercises';
import { NotificationType } from '@/shared/config/notifications';
import { useTranslation } from '@/shared/lib/localization';

export const useLoadExercise = () => {
  const {
    params: { id },
  } = useRoute();

  const exerciseId = +id;

  const { t } = useTranslation();

  const { addNotification } = useNotificationsStore();

  const { result, loading, error } = useGetExerciseQuery(exerciseId);

  const exercise = computed<Exercise | null>(() => result.value?.getExerciseById ?? null);

  const isError = computed<boolean>(() => !!error.value);

  watch(isError, (isError) => {
    if (isError) {
      addNotification({
        type: NotificationType.error,
        title: t('notifications.exercise.loadingFailure.title'),
        message: t('notifications.exercise.loadingFailure.message'),
      });
    }
  });

  return { exercise, isLoading: loading };
};
