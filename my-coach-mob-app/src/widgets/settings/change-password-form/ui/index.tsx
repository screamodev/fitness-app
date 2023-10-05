import { Formik, FormikHelpers } from 'formik';

import { useAlert } from 'shared/lib/alert';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { FormikInput } from 'shared/ui/form';
import { View } from 'shared/ui/theme';
import { getPasswordsValidationSchema } from '../config';
import { useChangePassword } from '../lib';
import { styles } from './styles';

const initialValues = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

type ChangePasswordFormValues = typeof initialValues;

export function ChangePasswordForm() {
  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const { changePassword, loading } = useChangePassword();

  const handleChangePassword = async (
    { currentPassword, newPassword }: ChangePasswordFormValues,
    { resetForm }: FormikHelpers<ChangePasswordFormValues>,
  ) => {
    try {
      await changePassword(currentPassword, newPassword);
      showAlert(
        t('alerts.changePasswordSucceeded.title'),
        t('alerts.changePasswordSucceeded.message'),
      );
      resetForm();
    } catch (e) {
      showAlert(t('alerts.changePasswordFailed.title'), t('alerts.changePasswordFailed.message'));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getPasswordsValidationSchema(t)}
      onSubmit={handleChangePassword}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View>
            <FormikInput
              secureText
              name="currentPassword"
              label={t('labels.password.current')}
              placeholder={t('placeholders.password.current')}
              textContentType="password"
              inputContainerWrapperStyles={styles.inputWrapper}
            />
            <FormikInput
              secureText
              name="newPassword"
              label={t('labels.password.new')}
              placeholder={t('placeholders.password.new')}
              textContentType="newPassword"
              inputContainerWrapperStyles={styles.inputWrapper}
            />
            <FormikInput
              secureText
              name="confirmPassword"
              label={t('labels.password.confirm')}
              placeholder={t('placeholders.password.confirm')}
              inputContainerWrapperStyles={styles.inputWrapper}
            />
          </View>
          <PrimaryButton
            onPress={() => handleSubmit()}
            title={t('buttons.save')}
            loading={loading}
            disabled={loading}
          />
        </View>
      )}
    </Formik>
  );
}
