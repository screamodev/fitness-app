import { RouteProp, useRoute } from '@react-navigation/native';

import { ExercisesEmptyInfo, useGetExerciseById } from 'entities/exercises';
import { RootStackParamList, Screen } from 'shared/config/navigation';
import { Loader } from 'shared/ui/loader';
import { View } from 'shared/ui/theme';

import { ExerciseContent } from './exercise-content';
import { styles } from './styles';

export function ExerciseInfo() {
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamList, Screen.Exercise>>();

  const { isLoading, exercise } = useGetExerciseById(+id);

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (!exercise) {
      return <ExercisesEmptyInfo />;
    }

    return <ExerciseContent exercise={exercise} />;
  };

  return <View style={styles.container}>{renderContent()}</View>;
}
