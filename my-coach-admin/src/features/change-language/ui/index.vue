<script setup lang="ts">
import { LanguageIcon } from '@/shared/ui/icons';
import { languageOptions } from '../config';
import { useLanguage } from '../lib';
import './styles.scss';

const { language, changeLanguage } = useLanguage();
</script>

<template>
  <el-space>
    <el-select-v2
      v-model="language"
      :options="languageOptions"
      @change="changeLanguage"
      popper-class="select-options"
    >
      <template #prefix>
        <div class="select-lang">
          <LanguageIcon class="select-lang-icon" />
          <sup class="select-lang-text">{{ language }}</sup>
        </div>
      </template>
    </el-select-v2>
  </el-space>
</template>
