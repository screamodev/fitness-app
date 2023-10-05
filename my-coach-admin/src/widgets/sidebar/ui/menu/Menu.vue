<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { useTranslation } from '@/shared/lib/localization';
import { menuOptions } from './config';
import './styles.scss';

const { t } = useTranslation();

const route = useRoute();

const path = computed(() => route.path.split('/')[1]);

const selectedKeys = ref<string[]>([path.value]);

watchEffect(() => {
  if (selectedKeys.value[0] !== path.value) {
    selectedKeys.value = [path.value];
  }
});

const emits = defineEmits(['closeSidebar']);
</script>

<template>
  <el-menu v-model:selected-keys="selectedKeys" mode="vertical" class="menu-wrapper">
    <el-menu-item
      v-for="{ route, transKey, icon } of menuOptions"
      :key="transKey"
      :index="route"
      :class="{ 'menu-item-active': selectedKeys[0] === transKey }"
    >
      <router-link :to="route" class="menu-item-route">
        <div @click="emits('closeSidebar')" class="menu-item-route-content">
          <component :is="icon" class="menu-item-icon" />
          <el-text class="menu-item-text">{{ t(`${transKey}.title`) }}</el-text>
        </div>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
