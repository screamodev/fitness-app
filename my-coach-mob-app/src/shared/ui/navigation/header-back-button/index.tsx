import { Platform, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList, RootTabParamList } from 'shared/config/navigation';
import { isRootScreen } from 'shared/lib/navigation';
import { BackButton } from 'shared/ui/buttons';
import { styles } from './styles';

type HeaderBackButtonProps = {
  parentScreen: keyof RootTabParamList | keyof RootStackParamList;
  buttonStyle?: StyleProp<ViewStyle>;
};

export function HeaderBackButton(props: HeaderBackButtonProps) {
  const { parentScreen, buttonStyle } = props;

  const navigation = useNavigation();

  const { navigate } = navigation;

  const handleGoBack = () => {
    if (isRootScreen(parentScreen)) {
      navigate('Root', { screen: parentScreen as keyof RootTabParamList });
    } else {
      navigate(parentScreen as keyof RootStackParamList);
    }
  };

  return (
    <BackButton
      buttonStyle={[Platform.OS === 'ios' ? styles.button : undefined, buttonStyle]}
      onPress={handleGoBack}
    />
  );
}
