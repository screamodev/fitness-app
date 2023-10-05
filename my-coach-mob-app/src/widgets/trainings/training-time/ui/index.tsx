import { SelectTrainingTime } from 'features/trainings/select-training-time';
import { useTraining } from 'entities/training';
import { useLanguage } from 'shared/lib/localization';
import { DateView } from 'shared/ui/date';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export function TrainingTime() {
  const { selectedDate, setSelectedDate } = useTraining();

  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <DateView title={t('training.selectTime')} date={selectedDate} />
      <SelectTrainingTime date={selectedDate} onSelect={setSelectedDate} />
    </View>
  );
}
