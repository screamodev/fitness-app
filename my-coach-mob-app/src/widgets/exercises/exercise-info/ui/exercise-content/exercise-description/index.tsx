import { ScrollView } from 'react-native';

import { ExerciseMuscles } from 'features/exercises/exercise-muscles';
import { ExerciseInstruction } from 'entities/exercises';
import { MediasStack } from 'entities/medias';
import { Exercise } from 'shared/api/exersises';
import { getLocalizedInstruction, getLocalizedName, useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { CardTitle } from 'shared/ui/card';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type ExerciseDescriptionProps = {
  exercise: Exercise;
};

export function ExerciseDescription(props: ExerciseDescriptionProps) {
  const { exercise } = props;

  const { language } = useLanguage();

  const title = getLocalizedName(exercise, language);
  const instruction = getLocalizedInstruction(exercise, language);

  const backgroundColorMuscles = useThemeColor({}, 'background');

  const { muscles, medias } = exercise;

  return (
    <View style={styles.content}>
      <ScrollView style={styles.scroll}>
        <CardTitle title={title} />
        <ExerciseMuscles
          muscles={muscles}
          backgroundColor={backgroundColorMuscles}
          containerStyle={styles.muscles}
        />
        <MediasStack medias={medias} />
        <ExerciseInstruction instruction={instruction} />
      </ScrollView>
    </View>
  );
}
