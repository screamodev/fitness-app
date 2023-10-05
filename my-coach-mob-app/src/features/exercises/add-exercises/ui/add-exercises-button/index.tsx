import { useNavigation } from '@react-navigation/native';

import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';

export function AddExercisesButton() {
  const navigation = useNavigation();

  const { t } = useLanguage();

  const navigateToAddExercises = () => {
    navigation.navigate(Screen.AddExercises);
  };

  return <PrimaryButton title={t('exercises.button.add')} onPress={navigateToAddExercises} />;
}
