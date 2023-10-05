import { atom } from 'recoil';

import { User } from 'shared/api/user';
import { AtomKey } from 'shared/config/recoil';
import { getProfileIncomplete, getStoredToken, getStoredUser } from '../lib';

export const tokenState = atom<string | null>({
  key: AtomKey.token,
  default: getStoredToken(),
});

export const userState = atom<User | null>({
  key: AtomKey.user,
  default: getStoredUser(),
});

export const profileIncompleteState = atom<boolean>({
  key: AtomKey.profileIncomplete,
  default: getProfileIncomplete(),
});
