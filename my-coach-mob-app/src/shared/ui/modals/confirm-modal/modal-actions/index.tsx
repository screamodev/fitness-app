import { useThemeColor } from 'shared/lib/theme';
import { PrimaryButton } from 'shared/ui/buttons';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type ModalActionsProps = {
  confirmBtnText: string;
  cancelBtnText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function ModalActions(props: ModalActionsProps) {
  const { confirmBtnText, cancelBtnText, onConfirm, onClose } = props;

  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'border');
  const confirmTextColor = useThemeColor({}, 'danger');
  const closeTextColor = useThemeColor({}, 'secondary');

  const buttonProps = {
    backgroundColor: backgroundColor,
    containerStyle: [styles.buttonContainer, { borderColor }],
  };

  return (
    <View style={[styles.buttons, { borderColor }]}>
      <PrimaryButton
        title={confirmBtnText}
        textColor={confirmTextColor}
        onPress={onConfirm}
        {...buttonProps}
      />
      <View style={styles.divider} lightColor={borderColor} darkColor={borderColor} />
      <PrimaryButton
        title={cancelBtnText}
        textColor={closeTextColor}
        onPress={onClose}
        {...buttonProps}
      />
    </View>
  );
}
