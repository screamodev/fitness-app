import { ref, toRefs, watch } from 'vue';
import { ElNotification } from 'element-plus';

import { useNotificationsStore } from '@/entities/notifications';

export const useNotifications = () => {
  const lastAddedNotificationId = ref<string>('');

  const notificationsStore = useNotificationsStore();

  const { notifications } = toRefs(notificationsStore);

  const { deleteNotification } = notificationsStore;

  watch(
    notifications,
    (newNotifications) => {
      const addedNotification = newNotifications[newNotifications.length - 1];

      const isLastAddedNotification =
        addedNotification && addedNotification.id !== lastAddedNotificationId.value;

      if (isLastAddedNotification) {
        const { id, type, title, message } = addedNotification;

        if (!id) {
          return;
        }

        lastAddedNotificationId.value = id;

        ElNotification({
          type: type,
          title: title,
          message: message,
          onClose: () => deleteNotification(id),
        });
      }
    },
    { deep: true },
  );
};
