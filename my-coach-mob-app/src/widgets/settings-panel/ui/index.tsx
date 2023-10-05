import { DeleteAccount } from 'features/settings/delete-account';
import { SignOut } from 'features/settings/sign-out';
import { View } from 'shared/ui/theme';
import { ChangeLanguageSetting } from './change-language-setting';
import { ChangePasswordSetting } from './change-password-setting';
import { ChangeThemeSetting } from './change-theme-setting';
import { EditProfileSetting } from './edit-profile-setting';
import { NotificationsSetting } from './notifications-setting';
import { styles } from './styles';

export function SettingsPanel() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <EditProfileSetting />
        <ChangePasswordSetting />
      </View>
      <View style={styles.card}>
        <ChangeThemeSetting />
        <ChangeLanguageSetting />
        <NotificationsSetting />
      </View>
      <View style={styles.card}>
        <DeleteAccount />
      </View>
      <View style={styles.card}>
        <SignOut />
      </View>
    </View>
  );
}
