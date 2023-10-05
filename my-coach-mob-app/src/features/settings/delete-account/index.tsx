import { useLanguage } from 'shared/lib/localization';
import { useIsOpen } from 'shared/lib/state';
import { useThemeColor } from 'shared/lib/theme';
import { MenuButton } from 'shared/ui/buttons';
import { TrashIcon } from 'shared/ui/icons';
import { ConfirmModal } from 'shared/ui/modals';
import { useDeleteAccount } from './lib';

export function DeleteAccount() {
  const {
    isOpen: isConfirmModalOpen,
    open: openConfirmModal,
    close: closeConfirmModal,
  } = useIsOpen();

  const { deleteAccount } = useDeleteAccount();

  const { t } = useLanguage();

  const color = useThemeColor({}, 'danger');

  return (
    <>
      <MenuButton
        title={t('settings.deleteAccount.title')}
        icon={TrashIcon}
        color={color}
        onPress={openConfirmModal}
      />
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        title={t('settings.deleteAccount.modal.title')}
        description={t('settings.deleteAccount.modal.description')}
        confirmBtnText={t('settings.deleteAccount.modal.confirm')}
        cancelBtnText={t('settings.deleteAccount.modal.cancel')}
        onClose={closeConfirmModal}
        onConfirm={deleteAccount}
      />
    </>
  );
}
