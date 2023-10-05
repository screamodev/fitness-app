<script setup lang="ts">
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';

type CheckboxOption = {
  id: string;
  name: string;
  nameUk: string;
};

interface Props {
  value: string[];
  options: CheckboxOption[];
}

defineProps<Props>();

const { locale } = useTranslation();

const emits = defineEmits(['update-value']);
</script>

<template>
  <el-checkbox-group
    :model-value="value"
    @change="(newValue: string[]) => emits('update-value', newValue)"
  >
    <el-checkbox v-for="option in options" :key="option.id" :value="option.id" :label="option.id">
      {{ option[`name${getLocaleSuffix(locale)}` as keyof CheckboxOption] }}
    </el-checkbox>
  </el-checkbox-group>
</template>
