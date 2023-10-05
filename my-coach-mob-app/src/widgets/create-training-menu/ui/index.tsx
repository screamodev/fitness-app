import { useNavigation } from '@react-navigation/native';

import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { DropdownMenu } from 'shared/ui/dropdowns';
import { CalendarCheckIcon, CalendarClockIcon } from 'shared/ui/icons';
import { styles } from './styles';

export function CreateTrainingMenu() {
  const { t } = useLanguage();

  const navigation = useNavigation();

  const navigateToAddTraining = () => {
    navigation.navigate(Screen.AddTraining);
  };

  const buttons = [
    {
      icon: CalendarClockIcon,
      text: t('training.buttons.schedule'),
      onPress: () => null,
    },
    {
      icon: CalendarCheckIcon,
      text: t('training.buttons.add'),
      onPress: navigateToAddTraining,
    },
  ];

  return <DropdownMenu buttons={buttons} containerStyles={styles.container} />;
}
