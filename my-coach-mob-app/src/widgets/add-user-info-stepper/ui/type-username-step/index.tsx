import { useEffect } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Formik } from 'formik';

import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { FormikInput } from 'shared/ui/form';
import { AtIcon } from 'shared/ui/icons';
import { Step } from 'shared/ui/stepper';
import { View } from 'shared/ui/theme';
import { StepComponentProps, UserInfoKeys } from '../../config';
import { getUsernameFormValidationSchema } from './config';
import { useCheckUsername } from './lib';
import { styles } from './styles';

export function TypeUsernameStep(props: StepComponentProps<UserInfoKeys.username>) {
  const { value, setValue, onSubmit } = props;

  const { checkUsername, setUsernameAvailable, usernameAvailable, checkingUsername } =
    useCheckUsername();

  const { t } = useLanguage();

  const initialValues = {
    username: value,
  };

  const onChange = async (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newUsername = e.nativeEvent.text;
    setValue(newUsername);
  };

  const onFocus = () => {
    setUsernameAvailable(false);
  };

  const checkUsernameAvailability = async () => {
    await checkUsername(value);
  };

  useEffect(() => {
    checkUsernameAvailability();
  }, []);

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.usernameStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.usernameStep.text')}</Step.Description>
      </Step.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={getUsernameFormValidationSchema(t, usernameAvailable)}
        validateOnChange={true}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Step.Content>
              <View style={styles.inputWrapper}>
                <FormikInput
                  name="username"
                  beforeIcon={AtIcon}
                  placeholder={t('placeholders.user.username')}
                  textContentType="username"
                  inputContainerStyles={styles.inputContainer}
                  inputStyles={styles.input}
                  autoCapitalize="none"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={checkUsernameAvailability}
                />
              </View>
            </Step.Content>
            <Step.Footer>
              <PrimaryButton
                title={t('buttons.continue')}
                onPress={() => handleSubmit()}
                disabled={!isValid || checkingUsername}
              />
            </Step.Footer>
          </>
        )}
      </Formik>
    </Step>
  );
}
