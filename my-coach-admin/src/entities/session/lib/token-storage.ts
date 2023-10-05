import { LocalStorageKey } from '@/shared/config/storage';

export const getStoredToken = () => {
  return localStorage.getItem(LocalStorageKey.token);
};

export const storeToken = (token: string) => {
  return localStorage.setItem(LocalStorageKey.token, token);
};

export const removeToken = () => {
  return localStorage.removeItem(LocalStorageKey.token);
};
