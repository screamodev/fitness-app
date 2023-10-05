<script setup lang="ts">
import { Header } from '@/widgets/header';
import { LoginForm } from '@/widgets/login';
import { useNotifications } from '@/features/alerts';
import './styles.scss';

useNotifications();
</script>

<template>
  <div class="login-page-wrapper">
    <Header />
    <div class="login-page-wrapper-content">
      <div class="login-page-wrapper-content-logo" />
      <div class="login-page-wrapper-content-form">
        <LoginForm />
      </div>
    </div>
  </div>
</template>
