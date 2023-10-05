import { useState } from 'react';

import { useSession } from 'entities/session';
import { Gender, Role } from 'shared/config/user';
import { useAlert } from 'shared/lib/alert';
import { useLanguage } from 'shared/lib/localization';
import { Stepper } from 'shared/ui/stepper';
import { Step, StepComponent, StepComponentProps, UserInfo, UserInfoKeys } from '../config';
import { useAddUserInfo } from '../lib';
import { SelectGenderStep } from './select-gender-step';
import { SelectRoleStep } from './select-role-step';
import { TypeHeightStep } from './type-height-step';
import { TypeUsernameStep } from './type-username-step';
import { TypeWeightStep } from './type-weight-step';
import { UploadAvatarStep } from './upload-avatar-step';

type AddUserInfoStepperProps = {
  onFinish: () => void;
};

const steps: Step[] = [
  { key: UserInfoKeys.gender, component: SelectGenderStep },
  { key: UserInfoKeys.role, component: SelectRoleStep },
  { key: UserInfoKeys.height, component: TypeHeightStep },
  { key: UserInfoKeys.weight, component: TypeWeightStep },
  { key: UserInfoKeys.username, component: TypeUsernameStep },
  { key: UserInfoKeys.avatar, component: UploadAvatarStep },
];

export function AddUserInfoStepper(props: AddUserInfoStepperProps) {
  const { onFinish } = props;

  const { user } = useSession();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: user?.gender || Gender.male,
    role: user?.role || Role.trainee,
    height: user?.height || undefined,
    weight: user?.weight || undefined,
    username: user?.username || '',
    avatar: user?.avatar?.url || '',
  });

  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const { addUserInfo, loading } = useAddUserInfo();

  const stepsCount = steps.length;

  const saveUserInfo = async () => {
    try {
      await addUserInfo(userInfo);
      onFinish();
    } catch (e) {
      showAlert(t('alerts.addUserInfoFailed.title'), t('alerts.addUserInfoFailed.message'));
    }
  };

  const renderActiveStep = (activeStep: number, goNext: () => void) => {
    const step = steps[activeStep];

    if (!step) {
      return <></>;
    }

    const isLastStep = activeStep === stepsCount - 1;

    const params: StepComponentProps<typeof step.key> = {
      value: userInfo[step.key],
      isLoading: loading,
      setValue: (value) => {
        setUserInfo((prevState) => ({ ...prevState, [step.key]: value }));
      },
      onSubmit: isLastStep ? saveUserInfo : goNext,
    };

    const Component = step.component as StepComponent<typeof step.key>;

    return <Component {...params} />;
  };

  return (
    <Stepper initialStep={0} steps={stepsCount}>
      {renderActiveStep}
    </Stepper>
  );
}
