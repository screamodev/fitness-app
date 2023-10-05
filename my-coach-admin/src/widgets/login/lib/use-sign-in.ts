import { ref } from 'vue';

import { useNotificationsStore } from '@/entities/notifications';
import { storeToken, useSessionStore } from '@/entities/session';
import { useSignInMutation } from '@/shared/api/auth';
import type { SignInUserVariables } from '@/shared/api/auth';
import { NotificationType } from '@/shared/config/notifications';
import { useTranslation } from '@/shared/lib/localization';

export const useSignIn = () => {
  const isLoading = ref<boolean>(false);

  const { mutate: signIn } = useSignInMutation();

  const sessionStore = useSessionStore();

  const { addNotification } = useNotificationsStore();

  const { t } = useTranslation();

  const handleSignIn = async (loginData: SignInUserVariables) => {
    isLoading.value = true;

    const data = await signIn(loginData)
      .catch(() => {
        addNotification({
          type: NotificationType.error,
          title: t('notifications.unauthorized.title'),
          message: t('notifications.unauthorized.message'),
        });
      })
      .finally(() => {
        isLoading.value = false;
      });

    if (data?.data?.signIn) {
      const {
        signIn: { accessToken, user },
      } = data.data;

      console.log(accessToken, 'accessToken');
      console.log(user, 'user');
      console.log(sessionStore, 'sessionStore');

      const { __typename, ...userData } = user;

      console.log(userData, 'UserData');

      sessionStore.setUser(userData);
      sessionStore.setToken(accessToken);
      storeToken(accessToken);
    }
  };

  return {
    isLoading,
    signIn: handleSignIn,
  };
};
