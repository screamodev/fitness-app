<script setup lang="ts">
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';

type SelectOption = {
  id: string;
  name: string;
  nameUk: string;
};

interface Props {
  value: SelectOption[];
  options: SelectOption[];
  placeholder: string;
}

defineProps<Props>();

const { locale } = useTranslation();

const emits = defineEmits(['update-value']);
</script>
<template>
  <el-select
    :model-value="value"
    @change="(newValue: SelectOption[]) => emits('update-value', newValue)"
    multiple
    :value-key="'id'"
    :placeholder="placeholder"
  >
    <el-option
      v-for="option in options"
      :label="String(option[`name${getLocaleSuffix(locale)}` as keyof SelectOption])"
      :key="option.id"
      :value="option"
    />
  </el-select>
</template>
