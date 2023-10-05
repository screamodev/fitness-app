import { useNavigation } from '@react-navigation/native';

import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { MenuButton } from 'shared/ui/buttons';
import { ProfileIcon } from 'shared/ui/icons';

export function EditProfileSetting() {
  const { t } = useLanguage();

  const navigation = useNavigation();

  const navigateToEditProfile = () => {
    navigation.navigate(Screen.EditProfile);
  };

  return (
    <MenuButton
      title={t('settings.editProfile.title')}
      icon={ProfileIcon}
      showChevron
      onPress={navigateToEditProfile}
    />
  );
}
