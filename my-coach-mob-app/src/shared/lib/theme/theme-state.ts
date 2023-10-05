import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'recoil';

import { AtomKey } from 'shared/config/recoil';
import { StorageKey } from 'shared/config/storage';
import { Theme, ThemeColorScheme } from 'shared/config/theme';

const loadTheme = async () => {
  const storedTheme = (await AsyncStorage.getItem(StorageKey.theme)) as Theme;

  if (!storedTheme || storedTheme === Theme.auto) {
    const deviceColorScheme = (Appearance.getColorScheme() as ThemeColorScheme) || Theme.light;

    return { color: deviceColorScheme, control: Theme.auto };
  }

  return { color: storedTheme, control: storedTheme };
};

export type ThemeState = {
  color: ThemeColorScheme;
  control: Theme;
};

export const themeState = atom<ThemeState>({
  key: AtomKey.theme,
  default: loadTheme(),
});
