<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useField } from 'vee-validate';

import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

interface Props {
  name: string;
  size: 'large' | 'default' | 'small';
  value?: string;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
  isRequired?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
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
  <el-form-item :error="meta.touched ? errorText : ''">
    <template #label>
      <span>{{ label }} <span v-if="isRequired" class="required">*</span></span>
    </template>
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
    />
  </el-form-item>
</template>
