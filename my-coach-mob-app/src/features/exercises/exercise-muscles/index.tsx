import { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { MuscleLabel } from 'entities/muscles';
import { MuscleType } from 'shared/api/muscles';
import { sortMuscles } from 'shared/lib/exercises';
import { useThemeColor } from 'shared/lib/theme';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type ExerciseMusclesProps = {
  muscles: MuscleType[];
  backgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export function ExerciseMuscles(props: ExerciseMusclesProps) {
  const { muscles, backgroundColor, containerStyle } = props;

  const sortedMuscles = useMemo(() => sortMuscles(muscles), [muscles]);

  const color = backgroundColor ? backgroundColor : useThemeColor({}, 'backgroundSecondary');

  return (
    <View style={[styles.container, containerStyle]} lightColor={color} darkColor={color}>
      {sortedMuscles.map((muscle, index) => {
        const isLastItem = index !== sortedMuscles.length - 1;

        const lastItemStyle = isLastItem ? styles.lastItemStyle : {};

        return <MuscleLabel muscle={muscle} lastElementStyle={lastItemStyle} key={index} />;
      })}
    </View>
  );
}
