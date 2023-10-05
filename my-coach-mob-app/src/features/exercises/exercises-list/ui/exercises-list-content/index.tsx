import { ScrollView } from 'react-native';

import { Exercise } from 'shared/api/exersises';
import { View } from 'shared/ui/theme';
import { ExercisesListItem } from './exercises-list-Item';
import { styles } from './styles';

type ExercisesListContentProps = {
  exercises: Exercise[];
};

export function ExercisesListContent(props: ExercisesListContentProps) {
  const { exercises } = props;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {exercises.map((exercise) => {
          const { id } = exercise;

          return <ExercisesListItem exercise={exercise} key={id} />;
        })}
      </View>
    </ScrollView>
  );
}
