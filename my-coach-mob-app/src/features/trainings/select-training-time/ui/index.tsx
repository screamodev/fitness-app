import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { SetterOrUpdater } from 'recoil';

import { Formats } from 'shared/config/date-time';
import { useThemeColor } from 'shared/lib/theme';
import { IconButton, TextButton } from 'shared/ui/buttons';
import { PlusIcon } from 'shared/ui/icons';
import { View } from 'shared/ui/theme';
import { getButtonStyles } from '../lib';
import { styles } from './styles';

type SelectTrainingTimeProps = {
  date: Date;
  onSelect: SetterOrUpdater<Date>;
};

export function SelectTrainingTime(props: SelectTrainingTimeProps) {
  const { date, onSelect } = props;

  const [currentDate] = useState(date);
  const [selectedDate, setSelectedDate] = useState(date);

  const currentTime = useMemo(() => format(currentDate, Formats.time), [currentDate]);

  const textColor = useThemeColor({}, 'text');

  const isCurrentDate = currentDate === selectedDate;

  const selectCurrentDate = () => {
    setSelectedDate(currentDate);
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);

    // Save date with new time in recoil
    // setDate(date);
  };

  return (
    <View style={styles.container}>
      <TextButton
        buttonStyle={getButtonStyles(isCurrentDate)}
        text={currentTime}
        onPress={selectCurrentDate}
      />
      <IconButton
        size={20}
        icon={PlusIcon}
        buttonStyle={[styles.selectButton, ...getButtonStyles(!isCurrentDate)]}
        iconColor={textColor}
        onPress={selectDate}
      />
    </View>
  );
}
