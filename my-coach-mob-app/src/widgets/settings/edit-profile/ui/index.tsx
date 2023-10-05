import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useSession } from 'entities/session';
import { useAlert } from 'shared/lib/alert';
import { generateFile } from 'shared/lib/form-data';
import { useLanguage } from 'shared/lib/localization';
import { UploadImage } from 'shared/ui/upload';
import { EditProfileForm } from '../../edit-profile-form';
import { UserFormProfile } from '../config';
import { useEditUserProfile } from '../lib';
import { styles } from './styles';

export function EditProfile() {
  const [uploadedAvatar, setUploadedAvatar] = useState<string | undefined>(undefined);

  const { user } = useSession();

  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const { editUserProfile } = useEditUserProfile();

  const saveUserInfo = async (userProfile: UserFormProfile) => {
    const { height, weight } = userProfile;

    const editedUserProfile = {
      ...userProfile,
      height: height ? Number(height) : null,
      weight: weight ? Number(weight) : null,
      ...(uploadedAvatar && { avatar: await generateFile(uploadedAvatar) }),
    };

    try {
      await editUserProfile(editedUserProfile);

      setUploadedAvatar(undefined);
    } catch (e) {
      showAlert(t('alerts.editUserInfoFailed.title'), t('alerts.editUserInfoFailed.message'));
    }
  };

  return (
    user && (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
      >
        <UploadImage
          containerStyles={styles.avatarContainer}
          value={uploadedAvatar || user.avatar.url}
          onUpload={setUploadedAvatar}
        />
        <EditProfileForm onSave={saveUserInfo} />
      </KeyboardAwareScrollView>
    )
  );
}
