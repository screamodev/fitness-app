import { useRecoilState } from 'recoil';

import { User } from 'shared/api/user';
import {
  removeProfileIncomplete,
  removeToken,
  removeUser,
  storeProfileIncomplete,
  storeToken,
  storeUser,
} from '../lib';
import { profileIncompleteState, tokenState, userState } from './atoms';

export const useSession = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [user, setUser] = useRecoilState(userState);
  const [isProfileIncomplete, setProfileIncomplete] = useRecoilState(profileIncompleteState);

  const sigInUser = async ({ token, user }: { token: string; user: User }) => {
    await storeToken(token);
    setToken(token);

    await storeUser(user);
    setUser(user);
  };

  const setUserInfo = async (user: User) => {
    await storeUser(user);
    setUser(user);
  };

  const signOutUser = async () => {
    await removeToken();
    setToken(null);

    await removeUser();
    setUser(null);
  };

  const setProfileAsComplete = async () => {
    setProfileIncomplete(false);
    await removeProfileIncomplete();
  };

  const markProfileIncomplete = async () => {
    setProfileIncomplete(true);
    await storeProfileIncomplete(true);
  };

  return {
    isSignedIn: !!token,
    token,
    user,
    isProfileIncomplete,
    sigInUser,
    signOutUser,
    setUserInfo,
    setProfileAsComplete,
    markProfileIncomplete,
  };
};
