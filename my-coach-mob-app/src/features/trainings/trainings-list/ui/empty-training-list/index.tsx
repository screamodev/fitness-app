import { useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { EmptyList } from 'shared/ui/empty-list';
import { DumbbellIcon } from 'shared/ui/icons';
import { styles } from './styles';

export function EmptyTrainingList() {
  const { t } = useLanguage();

  const iconColor = useThemeColor({}, 'border');

  return (
    <EmptyList title={t('training.empty.title')} description={t('training.empty.description')}>
      <DumbbellIcon size={141} color={iconColor} style={styles.icon} />
    </EmptyList>
  );
}
