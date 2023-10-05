import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Formik } from 'formik';

import { useLanguage } from 'shared/lib/localization';
import { parseNumberValue } from 'shared/lib/numbers';
import { PrimaryButton } from 'shared/ui/buttons';
import { UnitInput } from 'shared/ui/form';
import { Step } from 'shared/ui/stepper';
import { StepComponentProps, UserInfoKeys } from '../../config';
import { getHeightFormValidationSchema } from './config';

export function TypeHeightStep(props: StepComponentProps<UserInfoKeys.height>) {
  const { value, setValue, onSubmit } = props;

  const { t } = useLanguage();

  const initialValues = {
    height: value,
  };

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const height = e.nativeEvent.text;

    setValue(parseNumberValue(height));
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.heightStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.heightStep.text')}</Step.Description>
      </Step.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={getHeightFormValidationSchema}
        validateOnChange={true}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Step.Content>
              <UnitInput
                name="height"
                unit={t('addUserInfo.heightStep.unit')}
                placeholder="-"
                maxLength={6}
                onChange={onChange}
              />
            </Step.Content>
            <Step.Footer>
              <PrimaryButton
                title={t('buttons.continue')}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              />
            </Step.Footer>
          </>
        )}
      </Formik>
    </Step>
  );
}
