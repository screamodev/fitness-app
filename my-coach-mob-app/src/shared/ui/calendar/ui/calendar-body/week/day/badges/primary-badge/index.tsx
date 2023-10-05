import { useThemeColor } from 'shared/lib/theme';
import { Badge } from '../badge';

export function PrimaryBadge() {
  const color = useThemeColor({}, 'primary');

  return <Badge style={{ backgroundColor: color, borderColor: color }} />;
}
