<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useField } from 'vee-validate';

import { useTranslation } from '@/shared/lib/localization';

interface Props {
  name: string;
  size: 'large' | 'default' | 'small';
  value?: string;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
});

const { t } = useTranslation();

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage: errorKey,
  handleChange,
  setTouched,
  handleBlur,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});

const errorText = computed<string>(() => (errorKey.value ? t(errorKey.value) : ''));
</script>

<template>
  <el-form-item :label="label" :error="meta.touched ? errorText : ''">
    <el-input
      :name="name"
      :size="size"
      :id="name"
      :show-password="isPassword"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="handleChange"
      @blur="handleBlur"
      @focus="() => setTouched(false)"
    >
      <template v-slot:prefix>
        <slot name="icon" />
      </template>
    </el-input>
  </el-form-item>
</template>
