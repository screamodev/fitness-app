import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ExerciseMuscles } from 'features/exercises/exercise-muscles';
import { ExerciseCard } from 'entities/exercises';
import { Exercise } from 'shared/api/exersises';
import { Screen } from 'shared/config/navigation';
import { sortMuscles } from 'shared/lib/exercises';
import { getLocalizedName, useLanguage } from 'shared/lib/localization';
import { CardView } from 'shared/ui/card-view';
import { styles } from './styles';

type ExercisesListItemProps = {
  exercise: Exercise;
};

export function ExercisesListItem(props: ExercisesListItemProps) {
  const { exercise } = props;

  const { primaryImage, muscles, id } = exercise;

  const navigation = useNavigation();

  const { language } = useLanguage();

  const sortedMuscles = sortMuscles(muscles);

  const title = getLocalizedName(exercise, language);

  const navigateToExerciseInfo = () => {
    navigation.navigate(Screen.Exercise, { id });
  };

  return (
    <Pressable onPress={navigateToExerciseInfo}>
      <ExerciseCard title={title} image={primaryImage?.url || ''}>
        <CardView style={styles.container}>
          <ExerciseMuscles muscles={sortedMuscles} containerStyle={styles.contentMuscles} />
        </CardView>
      </ExerciseCard>
    </Pressable>
  );
}
