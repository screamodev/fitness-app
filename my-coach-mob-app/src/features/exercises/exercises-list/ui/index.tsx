import { Exercise } from 'shared/api/exersises';
import { Loader } from 'shared/ui/loader';
import { View } from 'shared/ui/theme';
import { ExercisesListContent } from './exercises-list-content';
import { FoundExercisesEmptyList } from './found-exercises-empty-list';
import { styles } from './styles';

type ExercisesListProps = {
  isLoading: boolean;
  exercises: Exercise[];
};

export function ExercisesList(props: ExercisesListProps) {
  const { isLoading, exercises } = props;

  const renderContent = () => {
    if (isLoading) {
      return <Loader containerStyle={styles.loader} />;
    }

    if (!exercises.length) {
      return <FoundExercisesEmptyList />;
    }

    return <ExercisesListContent exercises={exercises} />;
  };

  return <View style={styles.container}>{renderContent()}</View>;
}
