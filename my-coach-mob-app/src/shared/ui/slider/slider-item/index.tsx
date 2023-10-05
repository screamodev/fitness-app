import { ImageBackground, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from 'shared/config/colors';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

export type Slide = {
  title: string;
  text: string;
  image: ImageSourcePropType;
};

export type SliderItemProps = {
  item: Slide;
  isLandscape?: boolean;
};

export function SliderItem(props: SliderItemProps) {
  const { item, isLandscape } = props;

  const resizeMode = isLandscape ? 'center' : 'cover';

  return (
    <View style={styles.wrapper} darkColor={Colors.shared.black} lightColor={Colors.shared.black}>
      <ImageBackground style={styles.image} resizeMode={resizeMode} source={item.image}>
        <LinearGradient
          style={styles.textInfo}
          colors={['transparent', Colors.shared.black]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0, y: 0.5 }}
        >
          <Text
            lightColor={Colors.shared.white}
            darkColor={Colors.shared.white}
            style={styles.title}
          >
            {item.title}
          </Text>
          <Text
            lightColor={Colors.shared.white}
            darkColor={Colors.shared.white}
            style={styles.text}
          >
            {item.text}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
