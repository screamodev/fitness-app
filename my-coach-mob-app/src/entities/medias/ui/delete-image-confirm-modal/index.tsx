import { useLanguage } from 'shared/lib/localization';
import { ConfirmModal } from 'shared/ui/modals';

interface DeleteImageConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export function DeleteImageConfirmModal(props: DeleteImageConfirmModalProps) {
  const { isOpen, onCancel, onDelete } = props;

  const { t } = useLanguage();

  return (
    <ConfirmModal
      isOpen={isOpen}
      title={t('modals.deleteImage.title')}
      description={t('modals.deleteImage.description')}
      confirmBtnText={t('modals.deleteImage.confirm')}
      cancelBtnText={t('modals.deleteImage.cancel')}
      onClose={onCancel}
      onConfirm={onDelete}
    />
  );
}
