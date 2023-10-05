import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

export const useTheme = () => {
  const isDark = useDark();

  const isDarkTheme = ref<boolean>(!isDark.value);

  const changeTheme = useToggle(isDark);

  return {
    isDarkTheme,
    changeTheme,
  };
};
