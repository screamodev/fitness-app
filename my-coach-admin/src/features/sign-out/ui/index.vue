<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useSessionStore } from '@/entities/session';
import { Routes } from '@/shared/config/routes';
import { LogoutIcon } from '@/shared/ui/icons';
import './styles.scss';

const sessionStore = useSessionStore();

const { isSignedIn } = storeToRefs(sessionStore);
</script>

<template>
  <router-link :to="Routes.logout" v-if="isSignedIn" class="logout">
    <el-icon><LogoutIcon class="icon" /></el-icon>
  </router-link>
</template>
