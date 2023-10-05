<script setup lang="ts">
import { computed, ref } from 'vue';
import { ArrowLeft, Expand } from '@element-plus/icons-vue';

import { useSessionStore } from '@/entities/session';
import { useWindowSize } from '@/shared/lib/layout';
import { AsideConfig } from '../config';
import { useSidebarToggle } from '../lib';
import { Menu } from './menu';
import { UserInfo } from './user-info';
import './styles.scss';

const { user } = useSessionStore();

const { isCollapsed, toggleCollapsed } = useSidebarToggle();

const { isMdScreen } = useWindowSize();

const fullName = ref<string>(user?.fullName || '');

const asideWidth = computed<string>(() =>
  isCollapsed.value ? `${AsideConfig.width.collapsed}px` : `${AsideConfig.width.default}px`,
);

const closeSidebar = () => {
  if (!isMdScreen.value) {
    return;
  }

  isCollapsed.value = true;
};
</script>

<template>
  <el-aside
    :width="asideWidth"
    :class="['sidebar', { 'overlay-sidebar': isMdScreen }]"
    v-model:collapsed="isCollapsed"
  >
    <UserInfo :full-name="fullName" :collapsed="isCollapsed" />
    <Menu @close-sidebar="closeSidebar" />
    <el-button circle class="collapse-button" @click="toggleCollapsed">
      <el-icon v-if="isCollapsed"><Expand /></el-icon>
      <el-icon v-else><ArrowLeft /></el-icon>
    </el-button>
  </el-aside>
</template>
