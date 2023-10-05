import { View } from 'shared/ui/theme';
import { StepperProgressItem } from './stepper-progress-item';
import { styles } from './styles';

type StepperProgressProps = {
  activeStep: number;
  steps: number;
  goToStep: (step: number) => void;
};

export function StepperProgress(props: StepperProgressProps) {
  const { activeStep, steps, goToStep } = props;

  return (
    <View style={styles.wrapper}>
      {Array.from({ length: steps }, (_, step) => (
        <StepperProgressItem
          key={step}
          isPassed={step <= activeStep}
          onPress={() => goToStep(step)}
        />
      ))}
    </View>
  );
}
