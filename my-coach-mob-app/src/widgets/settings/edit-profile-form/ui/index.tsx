import { Formik } from 'formik';

import { useSession } from 'entities/session';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { FormikInput, PhysicalParameterInput } from 'shared/ui/form';
import { HeightIcon, WeightIcon } from 'shared/ui/icons';
import { View } from 'shared/ui/theme';
import { UserFormProfile } from '../../edit-profile/config';
import { getProfileValidationSchema } from '../config';
import { styles } from './styles';

type EditProfileFormProps = {
  onSave: (user: UserFormProfile) => void;
};

export function EditProfileForm(props: EditProfileFormProps) {
  const { onSave } = props;

  const { t } = useLanguage();

  const { user } = useSession();

  const initialVales = {
    fullName: user?.fullName || '',
    username: user?.username || '',
    email: user?.email || '',
    height: user?.height || undefined,
    weight: user?.weight || undefined,
  };

  // TODO: Implement verification of e-mail address and username uniqueness

  return (
    <Formik
      initialValues={initialVales}
      validationSchema={getProfileValidationSchema(t, false, false)}
      onSubmit={onSave}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View>
            <FormikInput
              name="fullName"
              label={t('labels.user.fullName')}
              placeholder={t('placeholders.user.fullName')}
              textContentType="name"
              inputAccessoryViewID="fullname"
            />
            <FormikInput
              name="username"
              label={t('labels.user.username')}
              placeholder={t('placeholders.user.username')}
              textContentType="username"
              inputAccessoryViewID="username"
            />
            <FormikInput
              name="email"
              label={t('labels.user.email')}
              placeholder={t('placeholders.user.email')}
              keyboardType="email-address"
              textContentType="emailAddress"
              inputAccessoryViewID="email"
            />
            <View style={styles.parametersWrapper}>
              <PhysicalParameterInput
                name="height"
                beforeIcon={HeightIcon}
                label={t('labels.user.height')}
                afterText={t('addUserInfo.heightStep.unit')}
                inputContainerWrapperStyles={styles.inputContainerWrapper}
                inputAccessoryViewID="height"
              />
              <PhysicalParameterInput
                name="weight"
                label={t('labels.user.weight')}
                beforeIcon={WeightIcon}
                afterText={t('addUserInfo.weightStep.unit')}
                inputContainerWrapperStyles={styles.inputContainerWrapper}
                inputAccessoryViewID="weight"
              />
            </View>
          </View>
          <PrimaryButton onPress={() => handleSubmit()} title={t('buttons.save')} />
        </View>
      )}
    </Formik>
  );
}
