<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';

import { useTranslation } from '@/shared/lib/localization';
import IconInput from '@/shared/ui/icon-input';
import { SearchIcon } from '@/shared/ui/icons';
import './styles.scss';

const { values } = useForm();

const { t } = useTranslation();

const searchText = ref<string>('');

const setSearchText = () => {
  searchText.value = values.search;
};
</script>

<template>
  <div class="exercises-search">
    <IconInput
      name="search"
      size="large"
      :placeholder="t('placeholders.exercises.search')"
      @input="setSearchText"
    >
      <template v-slot:icon>
        <SearchIcon />
      </template>
    </IconInput>
  </div>
</template>
