import { useThemeColor } from 'shared/lib/theme';
import { Button } from 'shared/ui/theme';
import { styles } from './styles';

type StepperProgressItemProps = {
  isPassed: boolean;
  onPress: () => void;
};

export function StepperProgressItem(props: StepperProgressItemProps) {
  const { isPassed, onPress } = props;

  const backgroundColor = useThemeColor({}, isPassed ? 'primary' : 'button');

  return (
    <Button
      titleStyle={styles.noDefault}
      buttonStyle={[styles.noDefault, styles.button]}
      containerStyle={[styles.noDefault, styles.buttonContainer]}
      radius={1}
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      onPress={onPress}
    />
  );
}
