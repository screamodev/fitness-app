import { Colors } from 'shared/config/colors';
import { useThemeColor } from 'shared/lib/theme';
import { AlertIcon } from 'shared/ui/icons';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type MessageProps = {
  text?: string;
};

export function Message(props: MessageProps) {
  const { text = '' } = props;

  const iconColor = useThemeColor({}, 'danger');

  return (
    <View style={styles.container}>
      {!!text && <AlertIcon color={iconColor} size={14} />}
      <Text lightColor={Colors.light.danger} darkColor={Colors.dark.danger} style={styles.message}>
        {text}
      </Text>
    </View>
  );
}
