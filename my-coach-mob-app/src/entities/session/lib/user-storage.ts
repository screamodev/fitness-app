import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from 'shared/api/user';
import { StorageKey } from 'shared/config/storage';

export const getStoredUser = async () => {
  const storedUser = await AsyncStorage.getItem(StorageKey.user);

  return storedUser ? JSON.parse(storedUser) : null;
};

export const storeUser = async (user: User) => {
  await AsyncStorage.setItem(StorageKey.user, JSON.stringify(user));
};

export const removeUser = async () => {
  await AsyncStorage.removeItem(StorageKey.user);
};
