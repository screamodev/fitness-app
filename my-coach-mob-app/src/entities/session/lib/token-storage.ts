import { StorageKey } from 'shared/config/storage';
import { getSecureStorage } from 'shared/lib/storage';

const SecureStorage = getSecureStorage();

export const getStoredToken = async () => {
  return SecureStorage.getItem(StorageKey.token);
};

export const storeToken = async (newToken: string) => {
  return SecureStorage.setItem(StorageKey.token, newToken);
};

export const removeToken = async () => {
  return SecureStorage.removeItem(StorageKey.token);
};
