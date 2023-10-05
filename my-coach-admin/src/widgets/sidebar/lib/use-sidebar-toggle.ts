import { ref, watch } from 'vue';

import { useWindowSize } from '@/shared/lib/layout';

export const useSidebarToggle = () => {
  const { isMdScreen } = useWindowSize();

  const isCollapsed = ref<boolean>(isMdScreen.value);

  const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  const updateCollapsed = () => {
    isCollapsed.value = isMdScreen.value;
  };

  watch(isMdScreen, () => {
    updateCollapsed();
  });

  return {
    isCollapsed,
    toggleCollapsed,
  };
};
