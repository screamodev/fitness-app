import { useSession } from 'entities/session';
import { useAddUserInfoMutation } from 'shared/api/user';
import { generateFile } from 'shared/lib/form-data';
import { UserInfo } from '../config';

export const useAddUserInfo = () => {
  const { user, setUserInfo, setProfileAsComplete } = useSession();

  const [addUserInfo, { error, loading }] = useAddUserInfoMutation();

  const handleAddUserInfo = async (userInfo: UserInfo) => {
    const userAvatar =
      userInfo.avatar === user?.avatar.url ? undefined : await generateFile(userInfo.avatar);

    const { data } = await addUserInfo({
      variables: { ...userInfo, avatar: userAvatar },
      context: { hasUpload: !!userAvatar },
    });

    if (data?.addUserInfo) {
      const { addUserInfo: userData } = data;

      await setUserInfo(userData);
      await setProfileAsComplete();
    }
  };

  return {
    loading,
    error,
    addUserInfo: handleAddUserInfo,
  };
};
