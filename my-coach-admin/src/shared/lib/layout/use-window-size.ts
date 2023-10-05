import { computed, onMounted, onUnmounted, ref } from 'vue';

import { Layout } from '@/shared/config/layout';

export const useWindowSize = () => {
  const width = ref<number>(window.innerWidth);

  const isMdScreen = computed<boolean>(() => width.value <= Layout.width.md);

  const isLgScreen = computed<boolean>(() => width.value <= Layout.width.lg);

  const handleResize = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    width,
    isMdScreen,
    isLgScreen,
  };
};
