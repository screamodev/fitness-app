import { AuthByGoogle } from 'features/auth/auth-by-google';
import { Colors } from 'shared/config/colors';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type AuthBySocialsProps = {
  title: string;
};

export function AuthBySocials(props: AuthBySocialsProps) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View lightColor={Colors.light.border} darkColor={Colors.dark.border} style={styles.line} />
        <Text
          lightColor={Colors.light.secondary}
          darkColor={Colors.dark.secondary}
          style={styles.title}
        >
          {title}
        </Text>
        <View lightColor={Colors.light.border} darkColor={Colors.dark.border} style={styles.line} />
      </View>
      <AuthByGoogle />
    </View>
  );
}
