import { useContext, useMemo } from 'react';

import { BadgeType } from '../../../../../config';
import { CalendarContext } from '../../../../../lib';
import { Badge } from './badge';
import { PrimaryBadge } from './primary-badge';
import { SecondaryBadge } from './secondary-badge';
import { styles } from './styles';

type BadgesProps = {
  date: Date;
};

export function Badges(props: BadgesProps) {
  const { date } = props;

  const { config, activeMonthDate, daysBadgesMap } = useContext(CalendarContext);

  const dayBadges = useMemo(
    () => daysBadgesMap.get(date.toDateString()),
    [daysBadgesMap, activeMonthDate],
  );

  const { containerComponent: Container } = config;

  if (!dayBadges) {
    return <></>;
  }

  return (
    <Container style={styles.container}>
      {dayBadges.map(
        (badgeType, index) =>
          (badgeType === BadgeType.primary && <PrimaryBadge key={index} />) ||
          (badgeType === BadgeType.secondary && <SecondaryBadge key={index} />) || (
            <Badge key={index} />
          ),
      )}
    </Container>
  );
}
