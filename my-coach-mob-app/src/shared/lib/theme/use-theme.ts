import { useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';

import { StorageKey } from 'shared/config/storage';
import { Theme, ThemeColorScheme } from 'shared/config/theme';
import { themeState } from './theme-state';
import { useColorScheme } from './use-color-scheme';

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const { setItem } = useAsyncStorage(StorageKey.theme);

  const deviceColorScheme = (useColorScheme() || Theme.light) as ThemeColorScheme;

  useEffect(() => {
    if (deviceColorScheme === theme.color || theme.control !== Theme.auto) return;
    changeTheme(Theme.auto);
  }, [deviceColorScheme]);

  const changeTheme = async (newTheme: Theme) => {
    if (newTheme === Theme.auto) {
      setTheme({ color: deviceColorScheme, control: Theme.auto });
      await setItem(Theme.auto);
      return;
    }

    setTheme({ color: newTheme, control: newTheme });
    await setItem(newTheme);
  };

  return {
    theme,
    changeTheme,
  };
};
