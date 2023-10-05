import { startOfDay } from 'date-fns';

import { DayBadge, DaysBadgesMap } from '../config';

export const mapDaysBadges = (daysBadges: DayBadge[]) => {
  return daysBadges.reduce((daysBadgesMap: DaysBadgesMap, dayBadge: DayBadge) => {
    const { date, type } = dayBadge;

    const dayDate = startOfDay(date).toDateString();

    const currentDayBadges = daysBadgesMap.get(dayDate);
    const hasCurrentBadgeType = currentDayBadges && currentDayBadges.includes(type);

    const badges = currentDayBadges && !hasCurrentBadgeType ? [...currentDayBadges, type] : [type];

    return daysBadgesMap.set(dayDate, badges);
  }, new Map());
};
