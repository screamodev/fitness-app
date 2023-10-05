<script setup lang="ts">
import { useTranslation } from '@/shared/lib/localization';
import type { Action } from './config';

interface Props {
  items: Action[];
}

const { t } = useTranslation();

defineProps<Props>();
</script>

<template>
  <el-dropdown trigger="click">
    <slot name="icon"></slot>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="{ titleKey } in items" :key="titleKey">
          {{ t(titleKey) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
