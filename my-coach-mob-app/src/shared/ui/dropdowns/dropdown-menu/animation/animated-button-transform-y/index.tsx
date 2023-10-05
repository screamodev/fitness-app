import { ReactNode } from 'react';
import 'setimmediate';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimationOptions = {
  opacity: { min: 0, max: 1 },
  translationY: { start: 55, end: 0 },
  stiffness: { transform: 55, opacity: 15 },
};

type AnimatedButtonTransformYProps = {
  isStartAnimation: boolean;
  children: ReactNode;
};

export function AnimatedButtonTransformY(props: AnimatedButtonTransformYProps) {
  const { isStartAnimation, children } = props;

  const opacity = useSharedValue<number>(AnimationOptions.opacity.min);
  const transformY = useSharedValue<number>(AnimationOptions.translationY.start);

  opacity.value = isStartAnimation
    ? withSpring(AnimationOptions.opacity.max, { stiffness: AnimationOptions.stiffness.opacity })
    : withSpring(AnimationOptions.opacity.min);

  transformY.value = isStartAnimation
    ? withSpring(AnimationOptions.translationY.end, {
        stiffness: AnimationOptions.stiffness.transform,
      })
    : withSpring(AnimationOptions.translationY.start);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transformY.value }],
      opacity: opacity.value,
    };
  });

  return <Animated.View style={animatedStyles}>{children}</Animated.View>;
}
