import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

export type CalendarProps = Partial<
  CalendarConfig & {
    initActiveDate: Date;
    initSelectedDate: Date;
    daysBadges: DayBadge[];
    onSelectDate: (date: Date) => void;
  }
>;

export type DayBadge = {
  date: Date;
  type: BadgeType;
};

export enum BadgeType {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
}

export type DaysBadgesMap = Map<string, BadgeType[]>;

export enum CalendarMode {
  week = 'week',
  month = 'month',
}

export type CalendarConfig = {
  selectable: boolean;
  swipeControl: boolean;
  containerComponent: ((props: ViewProps) => JSX.Element) | typeof View;
  containerStyles?: StyleProp<ViewStyle>;
  renderControl?: (props: ControlProps) => JSX.Element;
  renderHeader?: (props: HeaderProps) => JSX.Element;
  renderDay?: (props: DayProps) => JSX.Element;
};

export type ControlProps = {
  date: Date;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
  showToday: () => void;
};

export type HeaderProps = {
  date: Date;
  weekDaysNames: string[];
  activeWeekDayName: string;
  isBelongsToActiveMonth: boolean;
};

export type DayProps = {
  date: Date;
  number: string;
  isActive: boolean;
  isSelected: boolean;
  isPast: boolean;
  isBelongsToActiveMonth: boolean;
};

export const DefaultCalendarConfig: CalendarConfig = {
  selectable: true,
  swipeControl: true,
  containerComponent: View,
};
