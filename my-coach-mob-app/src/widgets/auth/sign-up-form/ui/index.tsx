import { Formik, FormikValues } from 'formik';

import { useAlert } from 'shared/lib/alert';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { FormikInput } from 'shared/ui/form';
import { Text, View } from 'shared/ui/theme';
import { getSignUpValidationSchema } from '../config';
import { useSignUp } from '../lib';
import { styles } from './styles';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

type SignUpFormProps = {
  onSignUp: () => void;
};

export function SignUpForm(props: SignUpFormProps) {
  const { onSignUp } = props;

  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const { signUp, loading } = useSignUp();

  const handleSignUp = async ({ fullName, email, password }: FormikValues) => {
    try {
      await signUp(fullName, email, password);
      onSignUp();
    } catch (e) {
      showAlert(t('alerts.unregistered.title'), t('alerts.unregistered.message'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signUp.title')}</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={getSignUpValidationSchema(t)}
        onSubmit={handleSignUp}
      >
        {({ handleSubmit }) => (
          <>
            <FormikInput
              name="fullName"
              label={t('labels.user.fullName')}
              placeholder={t('placeholders.user.fullName')}
              textContentType="name"
              inputContainerWrapperStyles={styles.inputWrapper}
            />
            <FormikInput
              name="email"
              label={t('labels.user.email')}
              placeholder={t('placeholders.user.email')}
              keyboardType="email-address"
              textContentType="emailAddress"
              inputContainerWrapperStyles={styles.inputWrapper}
            />
            <FormikInput
              secureText
              name="password"
              label={t('labels.user.password')}
              placeholder={t('placeholders.user.password')}
              textContentType="newPassword"
              inputContainerWrapperStyles={styles.inputWrapper}
            />
            <FormikInput
              secureText
              name="repeatedPassword"
              label={t('labels.user.repeatedPassword')}
              placeholder={t('placeholders.user.repeatedPassword')}
              inputContainerWrapperStyles={styles.inputWrapper}
            />
            <PrimaryButton
              title={t('signUp.signUpBtn')}
              containerStyle={styles.buttonContainer}
              loading={loading}
              disabled={loading}
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
