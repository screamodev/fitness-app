import { SelectRole } from 'features/add-user-info/select-role';
import { Role } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Step } from 'shared/ui/stepper';
import { StepComponentProps, UserInfoKeys } from '../../config';

export function SelectRoleStep(props: StepComponentProps<UserInfoKeys.role>) {
  const { value, setValue, onSubmit } = props;

  const { t } = useLanguage();

  const onSelectRole = (role: Role) => {
    setValue(role);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.roleStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.roleStep.description')}</Step.Description>
      </Step.Header>
      <Step.Content>
        <SelectRole value={value} onSelect={onSelectRole} />
      </Step.Content>
      <Step.Footer>
        <PrimaryButton title={t('buttons.continue')} onPress={onSubmit} />
      </Step.Footer>
    </Step>
  );
}
