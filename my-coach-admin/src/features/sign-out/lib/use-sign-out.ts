import { removeToken, removeUser, useSessionStore } from '@/entities/session';

export const useSignOut = async () => {
  const sessionStore = useSessionStore();

  sessionStore.setUser(null);
  sessionStore.setToken(null);

  await removeUser();
  await removeToken();
};
