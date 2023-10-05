import { ImageSourcePropType, Pressable } from 'react-native';

import { useBoxShadow } from 'shared/lib/styles';
import { useThemeColor } from 'shared/lib/theme';
import { Image, View } from 'shared/ui/theme';
import { styles } from './styles';

type GenderOptionProps = {
  imageSource: ImageSourcePropType;
  isSelected: boolean;
  onSelect: () => void;
};

export function GenderOption(props: GenderOptionProps) {
  const { imageSource, isSelected, onSelect } = props;

  const borderColor = useThemeColor({}, isSelected ? 'button' : 'background');
  const backgroundColor = useThemeColor({}, 'primary');

  const shadowColor = !isSelected ? 'transparent' : undefined;
  const shadowStyles = useBoxShadow(shadowColor, shadowColor);

  return (
    <View style={[styles.container, shadowStyles]}>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor,
            borderColor,
          },
        ]}
        onPress={onSelect}
      >
        <Image
          source={imageSource}
          style={styles.image}
          lightColor="transparent"
          darkColor="transparent"
        />
      </Pressable>
    </View>
  );
}
