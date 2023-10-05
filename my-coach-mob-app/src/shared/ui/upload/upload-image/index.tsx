import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

import { DeleteImageConfirmModal } from 'entities/medias';
import { useSession } from 'entities/session';
import { UploadFunction } from 'shared/config/upload';
import { useIsOpen } from 'shared/lib/state';
import { useImageActions } from './lib';
import { UploaderIcon, UploaderPreview } from './ui';
import { styles } from './styles';

type UploadAvatarProps = {
  value: string;
  containerStyles?: StyleProp<ViewStyle>;
  onUpload: UploadFunction;
};

export function UploadImage(props: UploadAvatarProps) {
  const { value, containerStyles, onUpload } = props;

  const {
    isOpen: isDeleteModalVisible,
    close: closeDeleteConfirmModal,
    open: openDeleteConfirmModal,
  } = useIsOpen();

  const { showImageActions } = useImageActions(value, onUpload, openDeleteConfirmModal);

  const { user } = useSession();

  const handleDelete = async () => {
    user && onUpload(user?.avatar.url);

    closeDeleteConfirmModal();
  };

  return (
    <>
      <View style={containerStyles}>
        <UploaderPreview value={value} />
        <Pressable style={styles.content} onPress={showImageActions}>
          <UploaderIcon isUploaded={!!value} />
        </Pressable>
      </View>
      <DeleteImageConfirmModal
        isOpen={isDeleteModalVisible}
        onCancel={closeDeleteConfirmModal}
        onDelete={handleDelete}
      />
    </>
  );
}
