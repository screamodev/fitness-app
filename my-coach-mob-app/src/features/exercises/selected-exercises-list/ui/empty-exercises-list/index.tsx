import { useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { EmptyList } from 'shared/ui/empty-list';
import { WeightLifterIcon } from 'shared/ui/icons';
import { styles } from './styles';

export function EmptyExercisesList() {
  const { t } = useLanguage();

  const iconColor = useThemeColor({}, 'border');

  return (
    <EmptyList
      title={t('exercises.empty.added.title')}
      description={t('exercises.empty.added.description')}
    >
      <WeightLifterIcon size={92} color={iconColor} style={styles.icon} />
    </EmptyList>
  );
}
