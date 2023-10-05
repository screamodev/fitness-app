import { useField } from 'formik';

import { KeyboardDoneButton } from 'shared/ui/buttons';
import { Input, InputProps } from '../input';

type FormikInputProps = InputProps & {
  name: string;
  inputAccessoryViewID?: string;
};

export function FormikInput(props: FormikInputProps) {
  const { name, inputAccessoryViewID } = props;

  const [field, meta] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <>
      <Input
        {...props}
        inputAccessoryViewID={inputAccessoryViewID}
        fieldValue={field.value ? field.value.toString() : ''}
        hasError={hasError}
        error={meta.error}
        onChange={() => field.onChange(name)}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
      />
      {inputAccessoryViewID && <KeyboardDoneButton inputAccessoryViewID={inputAccessoryViewID} />}
    </>
  );
}
