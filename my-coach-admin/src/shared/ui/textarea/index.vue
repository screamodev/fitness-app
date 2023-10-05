<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useField } from 'vee-validate';

import { useTranslation } from '@/shared/lib/localization';

interface Props {
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  rows?: number;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  value: '',
  isRequired: false,
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
      :id="name"
      type="textarea"
      :rows="rows"
      v-model="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      @focus="() => setTouched(false)"
    />
  </el-form-item>
</template>
