import { ExerciseInfo } from 'widgets/exercises';
import { AppLayout } from 'widgets/layout';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function ExerciseScreen() {
  return (
    <AppLayout withTopInset={false} scrollEnabled={false}>
      <View style={styles.container}>
        <ExerciseInfo />
      </View>
    </AppLayout>
  );
}
