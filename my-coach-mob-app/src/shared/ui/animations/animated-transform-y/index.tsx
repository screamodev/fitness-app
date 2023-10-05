import { ReactNode, useEffect } from 'react';
import 'setimmediate';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { styles } from './styles';

const AnimationOptions = {
  translationY: { start: 420, end: 700 },
  stiffness: { transform: 45 },
};

type AnimatedTransformYProps = {
  isStartAnimation: boolean;
  startTransform?: number;
  endTransform?: number;
  children: ReactNode;
};

export function AnimatedTransformY(props: AnimatedTransformYProps) {
  const {
    isStartAnimation,
    startTransform = AnimationOptions.translationY.start,
    endTransform = AnimationOptions.translationY.end,
    children,
  } = props;

  const transformY = useSharedValue<number>(endTransform);

  useEffect(() => {
    if (isStartAnimation) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [isStartAnimation]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transformY.value }],
    };
  });

  const startAnimation = () => {
    transformY.value = withSpring(startTransform, {
      stiffness: AnimationOptions.stiffness.transform,
    });
  };

  const endAnimation = () => {
    transformY.value = withSpring(endTransform, {
      stiffness: AnimationOptions.stiffness.transform,
    });
  };

  return <Animated.View style={[styles.container, animatedStyles]}>{children}</Animated.View>;
}
