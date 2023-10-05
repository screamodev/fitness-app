import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

import { useNotificationsStore } from '@/entities/notifications';
import { NotificationType } from '@/shared/config/notifications';
import { useTranslation } from '@/shared/lib/localization';

type NotificationOptions = {
  title: string;
  content: string;
  successTitle: string;
  successMessage: string;
  errorTitle: string;
  errorMessage: string;
};

export const useConfirmRequest = <T>() => {
  const { t } = useTranslation();

  const { addNotification } = useNotificationsStore();

  const response = ref<T>();

  const confirmRequestModal = async (request: () => Promise<T>, options: NotificationOptions) => {
    await ElMessageBox.confirm(options.content, options.title, {
      confirmButtonText: t('buttons.confirm'),
      cancelButtonText: t('buttons.cancel'),
      beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true;
          instance.confirmButtonText = t('buttons.loading');

          request()
            .then((data) => {
              response.value = data;
              addNotification({
                type: NotificationType.success,
                title: options.successTitle,
                message: options.successMessage,
              });
              done();
            })
            .catch(() => {
              addNotification({
                type: NotificationType.error,
                title: options.errorTitle,
                message: options.errorMessage,
              });
              done();
            })
            .finally(() => {
              instance.confirmButtonLoading = false;
            });
        } else {
          done();
        }
      },
      type: NotificationType.success,
    });

    return response.value;
  };

  return {
    confirmRequestModal,
  };
};
