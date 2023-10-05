import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';

import { YearSelect } from 'shared/config/calendar';
import { getMonth, getYears } from 'shared/lib/calendar';
import { useLanguage } from 'shared/lib/localization';
import { useIsOpen } from 'shared/lib/state';
import { useThemeColor } from 'shared/lib/theme';
import { CardView } from 'shared/ui/card-view';
import { ChevronDownIcon } from 'shared/ui/icons';
import { Select, WebSelect } from 'shared/ui/selects';
import { Text } from 'shared/ui/theme';
import { CalendarContext } from '../../../lib';
import { styles } from './styles';

export function YearPicker() {
  const { activeMonthDate, changeYear } = useContext(CalendarContext);

  const currentYear = activeMonthDate.getFullYear();

  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  useEffect(() => {
    setSelectedYear(currentYear);
  }, [currentYear]);

  const years = useMemo(() => {
    return getYears(YearSelect.totalYearsCount, currentYear - YearSelect.yearOffset);
  }, []);

  const { language } = useLanguage();

  const month = useMemo(() => getMonth(activeMonthDate, language), [activeMonthDate, language]);

  const {
    isOpen: isSelectOpen,
    open: openSelect,
    close: closeSelect,
    toggle: toggleSelect,
  } = useIsOpen();

  const iconColor = useThemeColor({}, 'secondary');

  const iconRotation = isSelectOpen ? '180deg' : '0deg';

  const rotateStyles = {
    duration: 300,
    transform: [{ rotate: iconRotation }],
  };

  const chevronIconsProps = {
    size: 20,
    color: iconColor,
  };

  const selectIcon = (
    <Animated.View style={rotateStyles}>
      <ChevronDownIcon {...chevronIconsProps} />
    </Animated.View>
  );

  const handleChangeYear = (year: number = selectedYear) => {
    setSelectedYear(year);
    changeYear(year);
    closeSelect();
  };

  return (
    <CardView style={styles.controls}>
      <Text style={styles.title}>{month}</Text>
      {Platform.OS === 'web' ? (
        <WebSelect
          icon={selectIcon}
          items={years}
          isOpen={isSelectOpen}
          selectedValue={selectedYear}
          onChangeValue={handleChangeYear}
          onClose={closeSelect}
          onToggle={toggleSelect}
        />
      ) : (
        <Select
          icon={selectIcon}
          items={years}
          selectedValue={selectedYear}
          onChangeValue={handleChangeYear}
          onClose={closeSelect}
          onOpen={openSelect}
        />
      )}
    </CardView>
  );
}
