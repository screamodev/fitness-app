<script setup lang="ts">
import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

const { t } = useTranslation();
</script>

<template>
  <div class="not-found-wrapper">
    <section class="not-found-wrapper-image">
      <img
        src="./assets/images/not-found.png"
        alt="Not found"
        class="not-found-wrapper-image-png"
      />
    </section>
    <section class="not-found-wrapper-content">
      <h1 class="not-found-wrapper-content-header">404</h1>
      <p class="not-found-wrapper-content-text">{{ t('notFound.title') }}</p>
      <router-link to="/" class="not-found-wrapper-content-link">
        <span>{{ t('notFound.link') }}</span>
      </router-link>
    </section>
  </div>
</template>
