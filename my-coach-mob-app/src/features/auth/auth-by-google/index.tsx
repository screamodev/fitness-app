import { Colors } from 'shared/config/colors';
import { PrimaryButton } from 'shared/ui/buttons';
import { GoogleIcon } from 'shared/ui/icons';
import { styles } from './styles';

export function AuthByGoogle() {
  // TODO Rewrite handleLogin function when connect google
  const handleLogin = () => {
    console.log('login');
  };

  return (
    <PrimaryButton
      onPress={handleLogin}
      icon={<GoogleIcon color={Colors.shared.white} size={24} />}
      backgroundColor={Colors.shared.grey}
      buttonStyle={styles.button}
    />
  );
}
