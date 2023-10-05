import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { getStoredToken, getStoredUser } from '@/entities/session';
import type { User } from '@/shared/api/auth';
import { StoreKey } from '@/shared/config/store';

export const useSessionStore = defineStore(StoreKey.session, () => {
  const storedUser = getStoredUser() || {};

  const storedToken = ref<string | null>(getStoredToken() || '');

  const user = ref<User | null>(storedUser);

  const isSignedIn = computed(() => !!storedToken.value);

  const setUser = (userData: User | null) => {
    user.value = userData;
  };

  const setToken = (token: string | null) => {
    storedToken.value = token;
  };

  return { user, isSignedIn, setUser, setToken };
});
