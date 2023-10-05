import { useEffect, useState } from 'react';
import 'setimmediate';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { AlphaChannel } from 'shared/config/colors';
import { useThemeColor } from 'shared/lib/theme';
import { styles } from './styles';

const AnimationOptions = {
  opacityBackgroundColor: { start: 0.4, end: 0 },
  stiffness: 40,
};

type AnimatedBackgroundOpacityProps = {
  isStartAnimation: boolean;
  onPress: () => void;
};

export function AnimatedBackgroundOpacity(props: AnimatedBackgroundOpacityProps) {
  const { isStartAnimation, onPress } = props;

  const [isVisible, setIsVisible] = useState(false);

  const opacityAlphaChannel = useSharedValue(
    isStartAnimation
      ? AnimationOptions.opacityBackgroundColor.start
      : AnimationOptions.opacityBackgroundColor.end,
  );

  const containerBackgroundColor = useThemeColor({}, 'background');

  const animatedStyles = useAnimatedStyle(() => {
    const opacityScaledToAlpha = Math.floor(opacityAlphaChannel.value * AlphaChannel.maxValue);
    const opacityHex = opacityScaledToAlpha.toString(16).padStart(2, '0');

    const backgroundColor = `${containerBackgroundColor}${opacityHex}`;

    return {
      backgroundColor,
    };
  });

  const startAnimation = () => {
    opacityAlphaChannel.value = withTiming(AnimationOptions.opacityBackgroundColor.start);
    setIsVisible(true);
  };

  const endAnimation = () => {
    opacityAlphaChannel.value = withTiming(AnimationOptions.opacityBackgroundColor.end);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  useEffect(() => {
    if (isStartAnimation) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [isStartAnimation]);

  return (
    <Pressable onPress={onPress} style={isVisible && styles.container}>
      <Animated.View style={[isVisible && styles.container, animatedStyles]} />
    </Pressable>
  );
}
