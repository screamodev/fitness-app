import { useLanguage } from 'shared/lib/localization';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type ExerciseInstructionProps = {
  instruction: string;
};

export function ExerciseInstruction(props: ExerciseInstructionProps) {
  const { instruction } = props;

  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('exercises.instruction')}</Text>
      <Text style={styles.content}>{instruction}</Text>
    </View>
  );
}
