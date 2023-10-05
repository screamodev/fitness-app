import { AuthBySocials } from 'widgets/auth/auth-by-socials';
import { SignUpForm } from 'widgets/auth/sign-up-form';
import { AppLayout } from 'widgets/layout';
import { RootStackScreenProps, Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { AuthFooter } from 'shared/ui/auth';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function SignUpScreen(props: RootStackScreenProps<Screen.SignUp>) {
  const { navigation } = props;

  const { t } = useLanguage();

  const navigateToAddUserInfo = () => {
    navigation.navigate(Screen.AddUserInfo);
  };

  return (
    <AppLayout>
      <View style={styles.container}>
        <SignUpForm onSignUp={navigateToAddUserInfo} />
        <AuthBySocials title={t('signUp.signUpWith')} />
        <AuthFooter
          navigateTo={Screen.SignIn}
          text={t('signUp.signInLinkText')}
          btnTitle={t('signUp.signInBtn')}
        />
      </View>
    </AppLayout>
  );
}
