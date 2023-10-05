import { useNavigation } from '@react-navigation/native';

import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { MenuButton } from 'shared/ui/buttons';
import { EarthIcon } from 'shared/ui/icons';

export function ChangeLanguageSetting() {
  const { t, language } = useLanguage();

  const navigation = useNavigation();

  const navigateToChangeLanguage = () => {
    navigation.navigate(Screen.ChangeLanguage);
  };

  return (
    <MenuButton
      title={t('settings.language.title')}
      icon={EarthIcon}
      value={t(`settings.language.variant.${language}`)}
      showChevron
      onPress={navigateToChangeLanguage}
    />
  );
}
