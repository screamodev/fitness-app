import { useField } from 'formik';

import { unitExpression } from 'shared/config/regex';
import { useThemeColor } from 'shared/lib/theme';
import { KeyboardDoneButton } from 'shared/ui/buttons';
import { Text, TextInput, TextInputProps, View } from 'shared/ui/theme';
import { styles } from './styles';

type UnitInputProps = {
  name: string;
  unit: string;
} & TextInputProps;

const inputAccessoryViewID = 'Done';

export function UnitInput(props: UnitInputProps) {
  const { name, unit, ...otherProps } = props;

  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  const errorColor = useThemeColor({}, 'danger');
  const backgroundColor = useThemeColor({}, 'backgroundSecondary');

  const onChangeText = (text: string) => {
    const unitValue = text.replace(unitExpression, '');
    field.onChange(name)(unitValue);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, { backgroundColor, ...(hasError && { borderColor: errorColor }) }]}
          value={field.value ? field.value.toString() : ''}
          keyboardType="numeric"
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={onChangeText}
          onBlur={field.onBlur(name)}
          {...otherProps}
        />
        <Text style={styles.unit}>{unit}</Text>
      </View>
      <KeyboardDoneButton inputAccessoryViewID={inputAccessoryViewID} />
    </>
  );
}
