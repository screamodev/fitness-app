import type { UploadUserFile } from 'element-plus';
import type { TranslateResult } from 'vue-i18n';

import { useNotificationsStore } from '@/entities/notifications';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import { NotificationType } from '@/shared/config/notifications';

const { removeImage } = useStepperExerciseStore();

export const removeExerciseImage = async (
  file: UploadUserFile,
  t: (translation: string) => TranslateResult,
) => {
  const { addNotification } = useNotificationsStore();

  if (file.uid) {
    removeImage(file.uid);
    return;
  }

  addNotification({
    type: NotificationType.error,
    title: t('notifications.upload.removeImageFailure.title'),
    message: t('notifications.upload.removeImageFailure.message'),
  });
};
