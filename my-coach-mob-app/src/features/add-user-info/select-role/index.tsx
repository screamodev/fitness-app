import { Role } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { View } from 'shared/ui/theme';
import { getRoles } from './config';
import { RoleOption } from './ui';
import { styles } from './styles';

type SelectRoleProps = {
  value: Role;
  onSelect: (role: Role) => void;
};

export function SelectRole(props: SelectRoleProps) {
  const { value, onSelect } = props;

  const { t } = useLanguage();

  const roles = getRoles(t);

  return (
    <View style={styles.content}>
      {roles.map(({ key, title, description, image }) => (
        <RoleOption
          title={title}
          description={description}
          key={key}
          imageSource={image}
          isSelected={key === value}
          onSelect={() => onSelect(key)}
        />
      ))}
    </View>
  );
}
