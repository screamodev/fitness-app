import { ReactNode } from 'react';
import 'setimmediate';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimationOptions = {
  rotate: { start: '0deg', end: '-45deg' },
  stiffness: 40,
};

type AnimatedButtonRotateProps = {
  isStartAnimation: boolean;
  children: ReactNode;
};

export function AnimatedButtonRotate(props: AnimatedButtonRotateProps) {
  const { isStartAnimation, children } = props;

  const rotate = useSharedValue<string>(AnimationOptions.rotate.end);

  rotate.value = isStartAnimation
    ? withSpring(AnimationOptions.rotate.start, { stiffness: AnimationOptions.stiffness })
    : withSpring(AnimationOptions.rotate.end);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotate.value }],
    };
  });

  return <Animated.View style={animatedStyles}>{children}</Animated.View>;
}
