<script setup lang="ts">
import { MoonIcon, SunIcon } from '@/shared/ui/icons';
import { useTheme } from '../lib';
import './styles.scss';

const { isDarkTheme, changeTheme } = useTheme();
</script>

<template>
  <div class="change-theme">
    <el-switch
      v-model="isDarkTheme"
      @change="changeTheme()"
      size="large"
      inline-prompt
      :active-icon="SunIcon"
      :inactive-icon="MoonIcon"
    />
  </div>
</template>
