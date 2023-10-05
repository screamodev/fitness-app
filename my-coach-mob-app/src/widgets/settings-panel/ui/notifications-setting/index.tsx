import { useLanguage } from 'shared/lib/localization';
import { MenuButton } from 'shared/ui/buttons';
import { BellIcon } from 'shared/ui/icons';

export function NotificationsSetting() {
  const { t } = useLanguage();

  const navigateToNotifications = () => {
    // TODO
  };

  return (
    <MenuButton
      title={t('settings.notifications.title')}
      icon={BellIcon}
      showChevron
      onPress={navigateToNotifications}
    />
  );
}
