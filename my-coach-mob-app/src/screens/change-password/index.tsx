import { AppLayout } from 'widgets/layout';
import { ChangePasswordForm } from 'widgets/settings/change-password-form';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function ChangePasswordScreen() {
  return (
    <AppLayout withTopInset={false}>
      <View style={styles.container}>
        <ChangePasswordForm />
      </View>
    </AppLayout>
  );
}
