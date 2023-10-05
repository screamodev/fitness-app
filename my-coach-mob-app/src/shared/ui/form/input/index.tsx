import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { useThemeColor } from 'shared/lib/theme';
import { CardView } from 'shared/ui/card-view';
import { Text, TextInput, TextInputProps, View } from 'shared/ui/theme';
import { Label } from './label';
import { Message } from './message';
import { SecureIcon } from './secure-icon';
import { styles } from './styles';

export type InputProps = {
  label?: string;
  beforeIcon?: IconComponent;
  iconSize?: number;
  secureText?: boolean;
  inputContainerWrapperStyles?: ViewStyle;
  inputContainerStyles?: ViewStyle;
  inputStyles?: TextStyle;
  afterText?: string;
  fieldValue?: string;
  hasError?: boolean;
  error?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
} & TextInputProps;

export function Input(props: InputProps) {
  const {
    label,
    beforeIcon: BeforeIcon,
    iconSize = 16,
    secureText,
    inputContainerWrapperStyles,
    inputContainerStyles,
    inputStyles,
    afterText,
    fieldValue,
    hasError,
    error,
    onChange,
    onChangeText,
    onBlur,
    ...otherProps
  } = props;

  const [value, setValue] = useState<string>('');

  const [isSecureText, setSecureText] = useState<boolean>(secureText || false);

  const errorColor = useThemeColor({}, 'danger');
  const backgroundColor = useThemeColor({}, 'backgroundSecondary');
  const iconColor = useThemeColor({}, 'text');

  const toggleTextVisibility = () => {
    setSecureText(!isSecureText);
  };

  return (
    <View style={[styles.container, inputContainerWrapperStyles]}>
      {label && <Label text={label} />}
      <CardView
        style={[
          styles.inputContainer,
          inputContainerStyles,
          { ...(hasError && { borderColor: errorColor }) },
        ]}
      >
        {BeforeIcon && <BeforeIcon color={iconColor} size={iconSize} style={styles.beforeIcon} />}
        <TextInput
          style={[styles.input, { backgroundColor }, inputStyles]}
          value={fieldValue || value}
          secureTextEntry={isSecureText}
          autoCorrect={false}
          onChange={onChange}
          onChangeText={onChangeText || setValue}
          onBlur={onBlur}
          {...otherProps}
        />
        {afterText && <Text style={styles.afterText}>{afterText}</Text>}
        {secureText && <SecureIcon isSecureText={isSecureText} onPress={toggleTextVisibility} />}
      </CardView>
      {hasError && <Message text={error} />}
    </View>
  );
}
