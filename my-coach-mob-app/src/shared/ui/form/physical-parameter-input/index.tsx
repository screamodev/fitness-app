import { NativeSyntheticEvent, TextInputKeyPressEventData, ViewStyle } from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { KeyboardKey } from 'shared/config/keyboard';
import { numericExpression } from 'shared/config/regex';
import { TextInputProps } from 'shared/ui/theme';
import { FormikInput } from '../formik-input';
import { styles } from './styles';

type PhysicalParameterInputProps = {
  afterText: string;
  beforeIcon: IconComponent;
  label: string;
  name: string;
  inputContainerWrapperStyles?: ViewStyle;
  value?: number;
  inputAccessoryViewID?: string;
  setValue?: (value: number) => void;
} & TextInputProps;

export function PhysicalParameterInput(props: PhysicalParameterInputProps) {
  const {
    name,
    label,
    value,
    beforeIcon,
    afterText,
    inputContainerWrapperStyles,
    inputAccessoryViewID,
  } = props;

  const onChangeText = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const keyCode = event.nativeEvent.key;
    const isNumeric = numericExpression.test(keyCode);
    const isBackspaceOrDelete = [KeyboardKey.Backspace, KeyboardKey.Delete].includes(
      keyCode as KeyboardKey,
    );

    if (!isNumeric && !isBackspaceOrDelete) {
      event.preventDefault();
    }
  };

  return (
    <FormikInput
      name={name}
      fieldValue={value}
      keyboardType="numeric"
      maxLength={6}
      label={label}
      beforeIcon={beforeIcon}
      afterText={afterText}
      inputStyles={styles.input}
      inputAccessoryViewID={inputAccessoryViewID}
      inputContainerWrapperStyles={inputContainerWrapperStyles}
      onKeyPress={onChangeText}
    />
  );
}
