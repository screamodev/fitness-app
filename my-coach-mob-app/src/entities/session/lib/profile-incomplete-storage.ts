import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageKey } from 'shared/config/storage';

export const getProfileIncomplete = async () => {
  const profileIncomplete = await AsyncStorage.getItem(StorageKey.profileIncomplete);

  return profileIncomplete === 'true';
};

export const storeProfileIncomplete = (isIncomplete: boolean) => {
  return AsyncStorage.setItem(StorageKey.profileIncomplete, String(isIncomplete));
};

export const removeProfileIncomplete = async () => {
  await AsyncStorage.removeItem(StorageKey.profileIncomplete);
};
