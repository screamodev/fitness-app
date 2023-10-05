import { useThemeColor } from 'shared/lib/theme';
import { Badge } from '../badge';

export function SecondaryBadge() {
  const color = useThemeColor({}, 'secondary');

  return <Badge style={{ backgroundColor: color, borderColor: color }} />;
}
