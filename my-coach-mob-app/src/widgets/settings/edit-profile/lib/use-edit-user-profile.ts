import { useSession } from 'entities/session';

import { useEditUserProfileMutation } from 'shared/api/user';
import { generateFile, getChangedFields } from 'shared/lib/form-data';
import { isString } from 'shared/lib/types';
import { UserProfile } from '../config';

export const useEditUserProfile = () => {
  const { user, sigInUser } = useSession();

  const [updateUserInfo, { error, loading }] = useEditUserProfileMutation();

  const handleEditProfile = async (userProfile: UserProfile) => {
    const userProfileKeys = Object.keys(userProfile) as (keyof UserProfile)[];

    const changedFields = user ? getChangedFields(userProfile, user, userProfileKeys) : {};

    if (changedFields && isString(changedFields.avatar)) {
      changedFields.avatar = await generateFile(changedFields.avatar);
    }

    if (Object.keys(changedFields).length === 0) {
      return;
    }

    const { data } = await updateUserInfo({
      variables: changedFields,
      context: { hasUpload: 'avatar' in changedFields },
    });

    if (data?.updateUserInfo) {
      const {
        updateUserInfo: { user, accessToken: token },
      } = data;

      await sigInUser({ user, token });
    }
  };

  return {
    loading,
    error,
    editUserProfile: handleEditProfile,
  };
};
