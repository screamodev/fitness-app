<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { useSignOut } from '@/features/sign-out/lib';
import { Routes } from '@/shared/config/routes';

const router = useRouter();

onMounted(async () => {
  await useSignOut()
    .then(() => router.push(Routes.login))
    .catch(() => router.push('/'));
});
</script>

<template></template>
