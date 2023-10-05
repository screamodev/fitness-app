import { FoundExercisesList } from 'widgets/exercises';
import { AppLayout } from 'widgets/layout';

export default function AddExercisesScreen() {
  return (
    <AppLayout withTopInset={false} scrollEnabled={false}>
      <FoundExercisesList />
    </AppLayout>
  );
}
