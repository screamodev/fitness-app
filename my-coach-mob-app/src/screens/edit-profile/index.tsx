import { AppLayout } from 'widgets/layout';
import { EditProfile } from 'widgets/settings/edit-profile';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function EditProfileScreen() {
  return (
    <AppLayout withTopInset={false}>
      <View style={styles.container}>
        <EditProfile />
      </View>
    </AppLayout>
  );
}
