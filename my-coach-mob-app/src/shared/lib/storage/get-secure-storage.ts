import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const getSecureStorage = () => {
  if (Platform.OS !== 'web') {
    const { getItemAsync, setItemAsync, deleteItemAsync } = SecureStore;

    return {
      getItem: getItemAsync,
      setItem: setItemAsync,
      removeItem: deleteItemAsync,
    };
  }

  const { getItem, setItem, removeItem } = AsyncStorage;

  return { getItem, setItem, removeItem };
};
