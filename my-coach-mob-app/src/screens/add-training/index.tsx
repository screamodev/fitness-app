import { AppLayout } from 'widgets/layout';
import { TrainingTime } from 'widgets/trainings/training-time';
import { AddExercisesButton } from 'features/exercises/add-exercises';
import { SelectedExercisesList } from 'features/exercises/selected-exercises-list';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function AddTrainingScreen() {
  return (
    <AppLayout withTopInset={false}>
      <View style={styles.container}>
        <TrainingTime />
        <SelectedExercisesList />
        <AddExercisesButton />
      </View>
    </AppLayout>
  );
}
