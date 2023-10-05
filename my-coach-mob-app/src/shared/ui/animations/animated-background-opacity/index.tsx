import { useEffect, useState } from 'react';
import 'setimmediate';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { AlphaChannel, Colors } from 'shared/config/colors';
import { styles } from './styles';

const AnimationOptions = {
  opacityBackgroundColor: { start: 0.25, end: 0 },
  duration: 300,
};

type AnimatedBackgroundOpacityProps = {
  isStartAnimation: boolean;
  onTouch: () => void;
};

export function AnimatedBackgroundOpacity(props: AnimatedBackgroundOpacityProps) {
  const { isStartAnimation, onTouch } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isStartAnimation) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [isStartAnimation]);

  const opacityAlphaChannel = useSharedValue(
    isStartAnimation
      ? AnimationOptions.opacityBackgroundColor.start
      : AnimationOptions.opacityBackgroundColor.end,
  );

  const containerBackgroundColor = Colors.shared.black;

  const opacityScaledToAlpha = Math.floor(opacityAlphaChannel.value * AlphaChannel.maxValue);
  const opacityHex = opacityScaledToAlpha.toString(16).padStart(2, '0');

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = `${containerBackgroundColor}${opacityHex}`;

    return {
      backgroundColor,
    };
  });

  const startAnimation = () => {
    setIsVisible(true);
    opacityAlphaChannel.value = withTiming(AnimationOptions.opacityBackgroundColor.start, {
      duration: AnimationOptions.duration,
    });
  };

  const endAnimation = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
    opacityAlphaChannel.value = withTiming(AnimationOptions.opacityBackgroundColor.end, {
      duration: AnimationOptions.duration,
    });
  };

  const onTouchEnd = () => {
    onTouch();
  };

  return (
    <Animated.View
      style={[isVisible && styles.container, animatedStyles]}
      onTouchEnd={onTouchEnd}
    />
  );
}
