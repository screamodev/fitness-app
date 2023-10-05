import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Notification } from '@/shared/config/notifications';
import { StoreKey } from '@/shared/config/store';

export const useNotificationsStore = defineStore(StoreKey.notifications, () => {
  const notifications = ref<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    const id = crypto.randomUUID();

    const notificationWithId = {
      ...notification,
      id,
    };

    notifications.value = [...notifications.value, notificationWithId];
  };

  const deleteNotification = (id: string) => {
    notifications.value = notifications.value.filter((notification) => notification.id !== id);
  };

  return {
    notifications,
    addNotification,
    deleteNotification,
  };
});
