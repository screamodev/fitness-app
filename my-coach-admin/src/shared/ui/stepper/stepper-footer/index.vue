<script setup lang="ts">
import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

interface Props {
  displayedPrev: boolean;
  disabledNext: boolean;
  nextButtonTitle: string;
  goToNext: () => void;
  goToPrev: () => void;
}

defineProps<Props>();

const { t } = useTranslation();
</script>

<template>
  <div class="stepper-footer">
    <el-button type="primary" :disabled="disabledNext" @click="goToNext">
      {{ nextButtonTitle }}
    </el-button>
    <el-button v-show="displayedPrev" @click="goToPrev">
      {{ t('buttons.prev') }}
    </el-button>
  </div>
</template>
