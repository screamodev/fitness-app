<script lang="ts" setup>
import { toRefs } from 'vue';

import { useMusclesStore } from '@/entities/muscles';
import { useTranslation } from '@/shared/lib/localization';
import CheckboxGroup from '@/shared/ui/checkbox-group';
import './styles.scss';

interface Props {
  filteredMusclesId: string[];
  updateSelectMuscles: (filteredMusclesId: string[]) => void;
}
const props = defineProps<Props>();

const { updateSelectMuscles } = props;

const { t } = useTranslation();

const musclesStore = useMusclesStore();

const { muscles } = toRefs(musclesStore);
</script>

<template>
  <el-form-item :label="t('exercise.muscles')" class="muscles-checkbox">
    <CheckboxGroup
      class="muscles-checkbox-group"
      :value="filteredMusclesId"
      :options="muscles"
      @update-value="updateSelectMuscles"
    />
  </el-form-item>
</template>
