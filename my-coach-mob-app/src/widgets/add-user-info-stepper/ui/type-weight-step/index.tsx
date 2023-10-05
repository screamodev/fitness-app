import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Formik } from 'formik';

import { useLanguage } from 'shared/lib/localization';
import { parseNumberValue } from 'shared/lib/numbers';
import { PrimaryButton } from 'shared/ui/buttons';
import { UnitInput } from 'shared/ui/form';
import { Step } from 'shared/ui/stepper';
import { StepComponentProps, UserInfoKeys } from '../../config';
import { getWeightFormValidationSchema } from './config';

export function TypeWeightStep(props: StepComponentProps<UserInfoKeys.weight>) {
  const { value, setValue, onSubmit } = props;

  const { t } = useLanguage();

  const initialValues = {
    weight: value,
  };

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const weight = e.nativeEvent.text;

    setValue(parseNumberValue(weight));
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.weightStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.weightStep.text')}</Step.Description>
      </Step.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={getWeightFormValidationSchema}
        validateOnChange={true}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Step.Content>
              <UnitInput
                name="weight"
                unit={t('addUserInfo.weightStep.unit')}
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
