import { useDeleteAvatarMutation } from 'shared/api/user';
import { useAlert } from 'shared/lib/alert';
import { useLanguage } from 'shared/lib/localization';

export const useDeleteAvatar = () => {
  const [deleteUserAvatar] = useDeleteAvatarMutation();

  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const handleDeleteAvatar = async () => {
    const response = await deleteUserAvatar();

    if (!response?.data?.deleteUserAvatar) {
      showAlert(t('alerts.deleteAvatarFailed.title'), t('alerts.deleteAvatarFailed.message'));
    }
  };

  return {
    deleteAvatar: handleDeleteAvatar,
  };
};
