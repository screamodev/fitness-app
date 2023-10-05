import type { UploadUserFile } from 'element-plus';
import type { TranslateResult } from 'vue-i18n';

import { useNotificationsStore } from '@/entities/notifications';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import { NotificationType } from '@/shared/config/notifications';
import { getMedia } from '@/shared/lib/upload';

const { addVideo } = useStepperExerciseStore();

const { addNotification } = useNotificationsStore();

export const setExerciseVideo = async (
  file: UploadUserFile,
  t: (translation: string) => TranslateResult,
) => {
  try {
    const video = await getMedia(file);

    if (video) {
      addVideo(video);
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
