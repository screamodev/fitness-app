import { ImageSourcePropType, Pressable } from 'react-native';

import { Colors } from 'shared/config/colors';
import { useBoxShadow } from 'shared/lib/styles';
import { useThemeColor } from 'shared/lib/theme';
import { Image, Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type RoleOptionProps = {
  title: string;
  description: string;
  imageSource: ImageSourcePropType;
  isSelected: boolean;
  onSelect: () => void;
};

export function RoleOption(props: RoleOptionProps) {
  const { title, description, imageSource, isSelected, onSelect } = props;

  const borderColor = useThemeColor({}, isSelected ? 'button' : 'border');

  const shadowColor = !isSelected ? 'transparent' : undefined;
  const shadowStyles = useBoxShadow(shadowColor, shadowColor);

  return (
    <View style={[styles.container, shadowStyles]}>
      <Pressable style={styles.button} onPress={onSelect}>
        <View
          style={styles.leftSideContent}
          lightColor={Colors.light.primary}
          darkColor={Colors.dark.primary}
        >
          <Image source={imageSource} style={styles.image} />
        </View>
        <View
          style={[
            styles.rightSideContent,
            {
              borderColor,
            },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
          <Text
            style={styles.text}
            lightColor={Colors.light.secondary}
            darkColor={Colors.dark.secondary}
          >
            {description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
