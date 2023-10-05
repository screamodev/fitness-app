import { Gender } from 'shared/config/user';
import { View } from 'shared/ui/theme';
import { genders } from './config';
import { GenderOption } from './ui';
import { styles } from './styles';

type SelectGenderProps = {
  value: Gender;
  onSelect: (gender: Gender) => void;
};

export function SelectGender(props: SelectGenderProps) {
  const { value, onSelect } = props;

  return (
    <View style={styles.content}>
      {genders.map(({ key, image }) => (
        <GenderOption
          key={key}
          imageSource={image}
          isSelected={key === value}
          onSelect={() => onSelect(key)}
        />
      ))}
    </View>
  );
}
