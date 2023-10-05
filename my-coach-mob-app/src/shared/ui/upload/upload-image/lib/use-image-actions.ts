import { useSession } from 'entities/session';
import { Action } from 'shared/config/action';
import { OpenModalFunction } from 'shared/config/modal';
import { UploadFunction } from 'shared/config/upload';
import { useOptionsActions } from 'shared/lib/actions';
import { useLanguage } from 'shared/lib/localization';
import { useMedia } from 'shared/lib/media';

export const useImageActions = (
  value: string,
  onUpload: UploadFunction,
  onOpenDeleteConfirmModal: OpenModalFunction,
) => {
  const { user } = useSession();

  const { t } = useLanguage();

  const [showImageActions] = useOptionsActions();

  const { uploadFromGallery, makePhoto } = useMedia();

  const actions: Action[] = [
    {
      title: t('actions.openGallery'),
      callback: async () => {
        const imageUri = await uploadFromGallery();
        onUpload(imageUri || value);
      },
    },
    {
      title: t('actions.makePhoto'),
      callback: async () => {
        const imageUri = await makePhoto();
        onUpload(imageUri || value);
      },
    },
    {
      title: t('actions.delete'),
      callback: onOpenDeleteConfirmModal,
      isDisabled: value === user?.avatar.url,
      isDestructive: true,
    },
    {
      title: t('actions.cancel'),
      isCancel: true,
    },
  ];

  return {
    showImageActions: () => {
      showImageActions(actions);
    },
  };
};
