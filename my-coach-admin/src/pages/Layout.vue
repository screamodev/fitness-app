<script setup lang="ts">
import { computed, provide, watch } from 'vue';

import { Header } from '@/widgets/header';
import SideBar from '@/widgets/sidebar';
import { useNotifications } from '@/features/alerts';
import { useLoadExerciseTypes } from '@/entities/exercise-types';
import { useLoadMuscles } from '@/entities/muscles';
import { useNotificationsStore } from '@/entities/notifications';
import { NotificationType } from '@/shared/config/notifications';
import { useWindowSize } from '@/shared/lib/layout';
import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

const { t } = useTranslation();

const { isMdScreen } = useWindowSize();

const { addNotification } = useNotificationsStore();

useNotifications();

const { isLoading: isExerciseTypesLoading, isError: isExerciseTypesLoadingFailed } =
  useLoadExerciseTypes();

const { isLoading: isMusclesLoading, isError: isMusclesLoadingFailed } = useLoadMuscles();

const isLoadingFailed = computed<boolean>(
  () => isMusclesLoadingFailed.value || isExerciseTypesLoadingFailed.value,
);

const isLoading = computed<boolean>(() => isMusclesLoading.value || isExerciseTypesLoading.value);

provide('isExerciseDataLoaded', isLoading);

watch(isLoadingFailed, (isLoadingFailed) => {
  if (isLoadingFailed) {
    addNotification({
      type: NotificationType.error,
      title: t('errors.dataFailed.title'),
      message: t('errors.dataFailed.message'),
    });
  }
});
</script>

<template>
  <el-container :class="{ 'middle-screen': isMdScreen }">
    <SideBar />
    <el-container>
      <el-header height="64px">
        <Header />
      </el-header>
      <el-main v-loading="isLoading">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
