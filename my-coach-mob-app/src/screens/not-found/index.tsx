import { TouchableOpacity } from 'react-native';

import { AppLayout } from 'widgets/layout';
import { RootStackScreenProps } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.heading}>{t('notFound.heading')}</Text>
        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
          <Text style={styles.linkText}>{t('notFound.btn')}</Text>
        </TouchableOpacity>
      </View>
    </AppLayout>
  );
}
