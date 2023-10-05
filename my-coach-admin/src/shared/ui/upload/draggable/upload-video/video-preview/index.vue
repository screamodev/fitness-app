<script setup lang="ts">
interface Props {
  videoSrc: string;
}

defineProps<Props>();
</script>

<template>
  <video controls>
    <source :src="videoSrc" type="video/mp4" />
  </video>
</template>
