import { useNavigation } from '@react-navigation/native';

import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { useTheme } from 'shared/lib/theme';
import { MenuButton } from 'shared/ui/buttons';
import { SunIcon } from 'shared/ui/icons';

export function ChangeThemeSetting() {
  const { t } = useLanguage();

  const { theme } = useTheme();

  const navigation = useNavigation();

  const navigateToChangeTheme = () => {
    navigation.navigate(Screen.ChangeTheme);
  };

  return (
    <MenuButton
      title={t('settings.theme.title')}
      icon={SunIcon}
      value={t(`settings.theme.variant.${theme.control}`)}
      showChevron
      onPress={navigateToChangeTheme}
    />
  );
}
