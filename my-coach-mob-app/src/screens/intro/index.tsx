import { IntroSlider } from 'widgets/intro-slider';
import { AppLayout } from 'widgets/layout';
import { Colors } from 'shared/config/colors';
import { RootStackScreenProps, Screen } from 'shared/config/navigation';
import { Theme } from 'shared/config/theme';
import { useLanguage } from 'shared/lib/localization';
import { AuthFooter } from 'shared/ui/auth';
import { PrimaryButton } from 'shared/ui/buttons';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function IntroScreen(props: RootStackScreenProps<Screen.Intro>) {
  const { navigation } = props;

  const { t } = useLanguage();

  const navigateToSignUp = () => {
    navigation.navigate(Screen.SignUp);
  };

  return (
    <AppLayout
      backgroundColor={Colors.shared.black}
      statusBarTheme={Theme.light}
      withTopInset={false}
      scrollEnabled={false}
    >
      <IntroSlider />
      <View style={styles.footer} darkColor={Colors.shared.black} lightColor={Colors.shared.black}>
        <PrimaryButton
          onPress={navigateToSignUp}
          title={t('intro.getStartedBtn')}
          textColor={Colors.shared.black}
          backgroundColor={Colors.shared.white}
          style={styles.button}
        />
        <AuthFooter
          navigateTo={Screen.SignIn}
          text={t('intro.signInLinkText')}
          btnTitle={t('intro.signInBtn')}
          textColor={Colors.shared.white}
          backgroundColor={Colors.shared.black}
        />
      </View>
    </AppLayout>
  );
}
