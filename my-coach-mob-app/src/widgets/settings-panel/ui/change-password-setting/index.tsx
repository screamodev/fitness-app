import { useNavigation } from '@react-navigation/native';

import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { MenuButton } from 'shared/ui/buttons';
import { LockIcon } from 'shared/ui/icons';

export function ChangePasswordSetting() {
  const { t } = useLanguage();

  const navigation = useNavigation();

  const navigateToChangePassword = () => {
    navigation.navigate(Screen.ChangePassword);
  };

  return (
    <MenuButton
      title={t('settings.changePassword.title')}
      icon={LockIcon}
      showChevron
      onPress={navigateToChangePassword}
    />
  );
}
