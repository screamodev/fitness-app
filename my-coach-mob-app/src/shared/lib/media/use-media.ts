import {
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';

import { imageConfig } from 'shared/config/image';
import { useAlert } from 'shared/lib/alert';
import { useLanguage } from 'shared/lib/localization';

type UploadImagePromise = Promise<string | false>;

type MediaTools = {
  uploadFromGallery: () => UploadImagePromise;
  makePhoto: () => UploadImagePromise;
};

export const useMedia = (): MediaTools => {
  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const uploadFromGallery = async () => {
    const permissionResult = await requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      showAlert(t('alerts.galleryAccess.title'), t('alerts.galleryAccess.message'));

      return false;
    }

    const result = await launchImageLibraryAsync(imageConfig);

    if (!result.canceled && result.assets) {
      return result.assets[0].uri;
    }

    return false;
  };

  const makePhoto = async () => {
    const permissionResult = await requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      showAlert(t('alerts.cameraAccess.title'), t('alerts.cameraAccess.message'));

      return false;
    }

    const result = await launchCameraAsync(imageConfig);

    if (!result.canceled && result.assets) {
      return result.assets[0].uri;
    }

    return false;
  };

  return { uploadFromGallery, makePhoto };
};
