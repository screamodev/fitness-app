import { AppLayout } from 'widgets/layout';
import { useLanguage } from 'shared/lib/localization';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

export default function CommunityScreen() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>{t('community.title')}</Text>
      </View>
    </AppLayout>
  );
}
