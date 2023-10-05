import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { atom } from 'recoil';

import { Language, Languages } from 'shared/config/language';
import { AtomKey } from 'shared/config/recoil';
import { StorageKey } from 'shared/config/storage';

const loadLanguage = async () => {
  const storedLanguage = (await AsyncStorage.getItem(StorageKey.lang)) as Language;

  if (!storedLanguage) {
    const deviceLanguage: string = Localization.locale.toLowerCase().slice(0, 2);

    return Languages.includes(deviceLanguage as Language)
      ? (deviceLanguage as Language)
      : Language.uk;
  }

  return storedLanguage;
};

export const languageState = atom<Language>({
  key: AtomKey.lang,
  default: loadLanguage(),
});
