import { AuthBySocials } from 'widgets/auth/auth-by-socials';
import { SignInForm } from 'widgets/auth/sign-in-form';
import { AppLayout } from 'widgets/layout';
import { RecoverPassword } from 'features/auth/recover-password';
import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { AuthFooter } from 'shared/ui/auth';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function SignInScreen() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <View style={styles.container}>
        <SignInForm />
        <RecoverPassword />
        <AuthBySocials title={t('signIn.signInWith')} />
        <AuthFooter
          navigateTo={Screen.SignUp}
          text={t('signIn.signUpLinkText')}
          btnTitle={t('signIn.signUpBtn')}
        />
      </View>
    </AppLayout>
  );
}
