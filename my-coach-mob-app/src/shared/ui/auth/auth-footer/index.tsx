import { RootStackParamList } from 'shared/config/navigation';
import { Link, Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type AuthFooterProps = {
  navigateTo: keyof RootStackParamList;
  text: string;
  btnTitle: string;
  textColor?: string;
  backgroundColor?: string;
};

export function AuthFooter(props: AuthFooterProps) {
  const { text, btnTitle, backgroundColor, textColor, navigateTo } = props;

  return (
    <View style={styles.wrapper} lightColor={backgroundColor} darkColor={backgroundColor}>
      <Text style={styles.text} lightColor={textColor} darkColor={textColor}>
        {text}
      </Text>
      <Link style={styles.linkTitle} lightColor={textColor} darkColor={textColor} to={navigateTo}>
        {btnTitle}
      </Link>
    </View>
  );
}
