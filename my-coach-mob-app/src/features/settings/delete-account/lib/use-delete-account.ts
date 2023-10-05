import { useSession } from 'entities/session';
import { useDeleteAccountMutation } from 'shared/api/user';
import { useAlert } from 'shared/lib/alert';
import { useLanguage } from 'shared/lib/localization';

export const useDeleteAccount = () => {
  const [deleteAccount] = useDeleteAccountMutation();

  const { signOutUser } = useSession();

  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const handleDeleteAccount = async () => {
    const response = await deleteAccount();

    if (response.data?.deleteAccount) {
      await signOutUser();
    } else {
      showAlert(t('alerts.deleteAccountFailed.title'), t('alerts.deleteAccountFailed.message'));
    }
  };

  return {
    deleteAccount: handleDeleteAccount,
  };
};
