import { useState } from 'react';
import Modal from 'react-native-modal';

import { useBoxShadow } from 'shared/lib/styles';
import { View } from 'shared/ui/theme';
import { ModalActions } from './modal-actions';
import { ModalContent } from './modal-content';
import { styles } from './styles';

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  confirmBtnText: string;
  cancelBtnText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function ConfirmModal(props: ConfirmModalProps) {
  const { isOpen, title, description, confirmBtnText, cancelBtnText, onConfirm, onClose } = props;

  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    onClose();
  };

  const handleClose = () => {
    setConfirmed(false);
    onClose();
  };

  const handleModalHide = () => {
    if (confirmed) {
      onConfirm();
    }
    setConfirmed(false);
  };

  const shadowStyles = useBoxShadow();

  return (
    <Modal
      style={styles.background}
      isVisible={isOpen}
      backdropTransitionOutTiming={0}
      onBackdropPress={handleClose}
      onModalHide={handleModalHide}
    >
      <View style={[styles.modal, shadowStyles]}>
        <ModalContent title={title} description={description} />
        <ModalActions
          confirmBtnText={confirmBtnText}
          cancelBtnText={cancelBtnText}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      </View>
    </Modal>
  );
}
