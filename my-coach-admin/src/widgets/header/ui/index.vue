<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { SelectLanguage } from '@/features/change-language';
import { ChangeTheme } from '@/features/change-theme';
import { SignOut } from '@/features/sign-out';
import { RoutesNames } from '@/shared/config/routes';
import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

const { t } = useTranslation();

const titleName = computed<string>(() => {
  switch (useRoute().path.split('/')[1]) {
    case RoutesNames.exercises:
      return t('exercises.title');
    case RoutesNames.workouts:
      return t('workouts.title');
    case RoutesNames.users:
      return t('users.title');
    default:
      return 'MyCoach';
  }
});
</script>

<template>
  <div class="header-wrapper">
    <el-text class="header-wrapper-title" tag="b">
      {{ titleName }}
    </el-text>
    <div class="header-wrapper-content">
      <SelectLanguage />
      <ChangeTheme />
      <SignOut />
    </div>
  </div>
</template>
