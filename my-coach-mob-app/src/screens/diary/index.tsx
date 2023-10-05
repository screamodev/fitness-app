import { ScrollView } from 'react-native';

import { CreateTrainingMenu } from 'widgets/create-training-menu';
import { DiaryCalendar } from 'widgets/diary-calendar';
import { AppLayout } from 'widgets/layout';
import { TrainingsList } from 'features/trainings/trainings-list';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function DiaryScreen() {
  return (
    <AppLayout withTopInset={false} withBottomInset={false} scrollEnabled={false}>
      <View style={styles.container}>
        <ScrollView>
          <DiaryCalendar />
          <TrainingsList />
        </ScrollView>
        <CreateTrainingMenu />
      </View>
    </AppLayout>
  );
}
