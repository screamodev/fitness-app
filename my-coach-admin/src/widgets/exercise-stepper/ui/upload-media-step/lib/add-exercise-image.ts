import type { UploadUserFile } from 'element-plus';
import type { TranslateResult } from 'vue-i18n';

import { useNotificationsStore } from '@/entities/notifications';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import { NotificationType } from '@/shared/config/notifications';
import { getExtendedMedia } from '@/shared/lib/upload';

const { addImage } = useStepperExerciseStore();

const { addNotification } = useNotificationsStore();

export const addExerciseImage = async (
  file: UploadUserFile,
  t: (translation: string) => TranslateResult,
) => {
  try {
    const image = await getExtendedMedia(file);

    if (image) {
      addImage(image);
    }
  } catch (error) {
    if (error instanceof Error) {
      addNotification({
        type: NotificationType.error,
        title: t('notifications.upload.addMediaFailure.title'),
        message: t('errors.upload.readFailed'),
      });
    }
  }
};
