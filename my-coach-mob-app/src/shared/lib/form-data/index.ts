import { Platform } from 'react-native';
import { ReactNativeFile } from 'apollo-upload-client';
import * as mime from 'react-native-mime-types';

export const generateFile = async (uri: string) => {
  const response = await fetch(uri);

  const fileName = uri.split('/').pop() || 'media';

  if (Platform.OS === 'ios') {
    return new ReactNativeFile({
      uri,
      type: mime.lookup(uri) || 'image',
      name: fileName,
    });
  }

  return response.blob();
};

export const getChangedFields = <T, U>(
  newObj: T,
  oldObj: U,
  keys: (keyof T & keyof U)[],
): Partial<T> => {
  return keys.reduce<Partial<T>>((changes = {}, key) => {
    if (!Object.is(newObj[key], oldObj[key])) {
      changes[key] = newObj[key];
    }

    return changes;
  }, {});
};
