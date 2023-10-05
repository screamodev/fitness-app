import { useContext } from 'react';
import { Pressable, Text } from 'react-native';

import { useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { CalendarContext } from '../../../lib';
import { styles } from './styles';

export function TodayButton() {
  const { showToday } = useContext(CalendarContext);

  const { t } = useLanguage();

  const color = useThemeColor({}, 'primary');

  return (
    <Pressable onPress={showToday}>
      <Text style={[styles.buttonText, { color }]}>{t('calendar.today')}</Text>
    </Pressable>
  );
}
