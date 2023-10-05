import { useSession } from 'entities/session';
import { useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { MenuButton } from 'shared/ui/buttons';
import { SignOutIcon } from 'shared/ui/icons';

export function SignOut() {
  const { t } = useLanguage();

  const color = useThemeColor({}, 'danger');

  const { signOutUser } = useSession();

  return (
    <MenuButton
      title={t('settings.signOut.title')}
      icon={SignOutIcon}
      color={color}
      onPress={signOutUser}
    />
  );
}
