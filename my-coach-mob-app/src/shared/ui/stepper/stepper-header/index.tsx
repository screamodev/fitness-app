import { BackButton } from 'shared/ui/buttons';
import { View } from 'shared/ui/theme';
import { StepperProgress } from './stepper-progress';
import { styles } from './styles';

type StepperProps = {
  activeStep: number;
  steps: number;
  goToStep: (step: number) => void;
  goBack: () => void;
};

export function StepperHeader(props: StepperProps) {
  const { activeStep, steps, goToStep, goBack } = props;

  const isFirstStep = activeStep === 0;

  return (
    <View style={[styles.container, { marginLeft: isFirstStep ? 64 : 10 }]}>
      {!isFirstStep && <BackButton onPress={goBack} />}
      <StepperProgress activeStep={activeStep} steps={steps} goToStep={goToStep} />
    </View>
  );
}
