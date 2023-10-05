<script setup lang="ts">
import { User } from '@element-plus/icons-vue';

import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

interface Props {
  fullName: string;
  collapsed: boolean;
}

defineProps<Props>();

const { t } = useTranslation();
</script>

<template>
  <div class="user-info-wrapper">
    <el-avatar :size="collapsed ? 30 : 50" alt="avatar">
      <el-icon :size="collapsed ? 10 : 30"><User /></el-icon>
    </el-avatar>
    <div :class="[collapsed ? 'hidden' : 'user-info-wrapper-content']">
      <el-text>{{ t('admin.title') }}</el-text>
      <el-text class="user-info-wrapper-content-name">{{ fullName }}</el-text>
    </div>
  </div>
</template>
