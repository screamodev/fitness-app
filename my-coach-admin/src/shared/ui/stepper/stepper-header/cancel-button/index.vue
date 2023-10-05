<script setup lang="ts">
import { Back } from '@element-plus/icons-vue';

import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

interface Props {
  onClick: () => void;
}

defineProps<Props>();
const { t } = useTranslation();
</script>

<template>
  <el-button @click="onClick" link class="cancel-button">
    <el-icon><Back class="icon" /></el-icon>
    <span class="cancel-button-text">{{ t('buttons.cancel') }}</span>
  </el-button>
</template>
