import { InputAccessoryView, Keyboard, Platform } from 'react-native';

import { useLanguage } from 'shared/lib/localization';
import { Button, View } from 'shared/ui/theme';
import { styles } from './styles';

type KeyboardDoneButtonProps = {
  inputAccessoryViewID: string;
  title?: string;
};

export function KeyboardDoneButton(props: KeyboardDoneButtonProps) {
  const { inputAccessoryViewID, title } = props;

  const { t } = useLanguage();

  if (Platform.OS !== 'ios') {
    return null;
  }

  return (
    <InputAccessoryView nativeID={inputAccessoryViewID}>
      <View style={styles.container}>
        <Button
          themeInverted={true}
          title={title || t('buttons.done')}
          onPress={Keyboard.dismiss}
        />
      </View>
    </InputAccessoryView>
  );
}
