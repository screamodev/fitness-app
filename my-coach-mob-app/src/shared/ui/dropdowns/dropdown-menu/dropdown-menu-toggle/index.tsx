import { IconButton } from 'shared/ui/buttons';
import { PlusIcon } from 'shared/ui/icons';
import { AnimatedButtonRotate } from '../animation';
import { styles } from './styles';

type DropdownMenuToggleProps = {
  isStartAnimation: boolean;
  onPress: () => void;
};

export function DropdownMenuToggle(props: DropdownMenuToggleProps) {
  const { isStartAnimation, onPress } = props;

  return (
    <AnimatedButtonRotate isStartAnimation={isStartAnimation}>
      <IconButton size={25} icon={PlusIcon} buttonStyle={styles.container} onPress={onPress} />
    </AnimatedButtonRotate>
  );
}
