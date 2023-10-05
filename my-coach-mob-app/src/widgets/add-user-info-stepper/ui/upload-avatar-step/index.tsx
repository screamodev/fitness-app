import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Step } from 'shared/ui/stepper';
import { UploadImage } from 'shared/ui/upload';
import { StepComponentProps, UserInfoKeys } from '../../config';
import { styles } from './styles';

export function UploadAvatarStep(props: StepComponentProps<UserInfoKeys.avatar>) {
  const { value, isLoading, setValue, onSubmit } = props;

  const { t } = useLanguage();

  const onUploadAvatar = (avatar: string) => {
    setValue(avatar);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.avatarStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.avatarStep.text')}</Step.Description>
      </Step.Header>
      <Step.Content>
        <UploadImage
          value={value}
          containerStyles={styles.avatarContainer}
          onUpload={onUploadAvatar}
        />
      </Step.Content>
      <Step.Footer>
        <PrimaryButton
          disabled={isLoading}
          loading={isLoading}
          title={t('buttons.start')}
          onPress={onSubmit}
        />
      </Step.Footer>
    </Step>
  );
}
