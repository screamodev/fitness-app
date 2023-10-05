<script setup lang="ts">
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import './styles.scss';

const { locale } = useTranslation();

type RadioOption = {
  id: string;
  name: string;
  nameUk: string;
};

interface Props {
  label: string;
  value: string;
  options: RadioOption[];
  isRequired?: boolean;
}

withDefaults(defineProps<Props>(), {
  isRequired: false,
});

const emits = defineEmits(['update-value']);
</script>

<template>
  <el-form-item>
    <template #label>
      <span>{{ label }} <span v-if="isRequired" class="required">*</span></span>
    </template>
    <el-radio-group
      :model-value="value"
      @update:model-value="(newValue: string) => emits('update-value', newValue)"
    >
      <el-radio v-for="option in options" :label="option.id" :key="option.id">
        {{ String(option[`name${getLocaleSuffix(locale)}` as keyof RadioOption]) }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>
