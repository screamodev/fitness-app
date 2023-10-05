import { SelectGender } from 'features/add-user-info/select-gender';
import { Gender } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Step } from 'shared/ui/stepper';
import { StepComponentProps, UserInfoKeys } from '../../config';

export function SelectGenderStep(props: StepComponentProps<UserInfoKeys.gender>) {
  const { value, setValue, onSubmit } = props;

  const { t } = useLanguage();

  const onSelectGender = (gender: Gender) => {
    setValue(gender);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.genderStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.genderStep.text')}</Step.Description>
      </Step.Header>
      <Step.Content>
        <SelectGender value={value} onSelect={onSelectGender} />
      </Step.Content>
      <Step.Footer>
        <PrimaryButton title={t('buttons.continue')} onPress={onSubmit} />
      </Step.Footer>
    </Step>
  );
}
