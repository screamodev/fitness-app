import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { useSelectedMuscles, useSelectedTypes } from '@/features/exercises-filters';
import { useExercisesStore } from '@/entities/exercises';
import { useNotificationsStore } from '@/entities/notifications';
import { NotificationType } from '@/shared/config/notifications';
import { useTranslation } from '@/shared/lib/localization';
import { usePagination } from '@/shared/lib/pagination';
import { getParamsIds } from '@/shared/lib/params';
import { useLoadExercisesWithParams } from './use-load-exercises-with-params';

export const useLoadExercises = () => {
  const router = useRouter();

  const { t } = useTranslation();

  const { page, totalItems, pageSize } = usePagination();

  const { addNotification } = useNotificationsStore();

  const { setFilters, closeFilters, openFilters } = useExercisesStore();

  const { getSelectedMuscles } = useSelectedMuscles();

  const { getSelectedTypes } = useSelectedTypes();

  const isLoading = ref<boolean>(false);

  const queryParameters = computed(() => router.currentRoute.value.query);

  const typesIds = computed(() =>
    queryParameters.value['types']
      ? getParamsIds(String(queryParameters.value['types']))
      : undefined,
  );

  const musclesIds = computed(() =>
    queryParameters.value['muscles']
      ? getParamsIds(String(queryParameters.value['muscles']))
      : undefined,
  );

  onMounted(() => {
    const { isLoading: isExerciseLoading, isError } = useLoadExercisesWithParams();

    watchEffect(() => {
      isLoading.value = isExerciseLoading.value;
    });

    watch(isError, (isError) => {
      if (isError) {
        addNotification({
          type: NotificationType.error,
          message: t('notifications.exercises.loadingFailure.message'),
          title: t('notifications.exercises.loadingFailure.title'),
        });
      }
    });
  });

  onUnmounted(() => {
    closeFilters();
  });

  watchEffect(() => {
    setFilters({
      types: typesIds.value && getSelectedTypes(typesIds.value),
      muscles: musclesIds.value && getSelectedMuscles(musclesIds.value),
    });

    if (typesIds.value || musclesIds.value) {
      openFilters();
    }
  });

  watch(page, () => {
    //TODO add logic for pagination
  });

  return {
    page,
    totalItems,
    isLoading,
    pageSize,
  };
};
