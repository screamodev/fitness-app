import { AddUserInfoStepper } from 'widgets/add-user-info-stepper';
import { AppLayout } from 'widgets/layout';
import { RootStackScreenProps, Screen } from 'shared/config/navigation';

export default function AddUserInfoScreen(props: RootStackScreenProps<Screen.AddUserInfo>) {
  const { navigation } = props;

  const navigateToRootScreen = () => {
    navigation.navigate(Screen.Root);
  };

  return (
    <AppLayout>
      <AddUserInfoStepper onFinish={navigateToRootScreen} />
    </AppLayout>
  );
}
