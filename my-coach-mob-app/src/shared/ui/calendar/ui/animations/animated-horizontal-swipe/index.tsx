import { ReactNode } from 'react';
import 'setimmediate';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { PanGesture, PanGestureStateChangeEvent, PanGestureUpdateEvent } from 'shared/ui/gestures';
import { styles } from './styles';

const AnimationOptions = {
  opacity: { min: 0.2, max: 1 },
  translationX: { start: 0 },
  damping: 15,
  stiffness: 50,
};

type AnimatedHorizontalSwipeProps = {
  children: ReactNode;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

export function AnimatedHorizontalSwipe(props: AnimatedHorizontalSwipeProps) {
  const { onSwipeLeft, onSwipeRight, children } = props;

  const opacity = useSharedValue<number>(AnimationOptions.opacity.max);
  const transformX = useSharedValue<number>(AnimationOptions.translationX.start);

  const onStart = (event: PanGestureStateChangeEvent) => {
    if (event.translationX === AnimationOptions.translationX.start) {
      opacity.value = AnimationOptions.opacity.max;
    }
  };

  const onUpdate = (event: PanGestureUpdateEvent) => {
    transformX.value = event.translationX / 2;
    opacity.value = withSpring(AnimationOptions.opacity.min, {
      damping: AnimationOptions.damping,
    });
  };

  const onEnd = (event: PanGestureStateChangeEvent) => {
    if (event.translationX > AnimationOptions.translationX.start) {
      onSwipeLeft();
    }

    if (event.translationX < AnimationOptions.translationX.start) {
      onSwipeRight();
    }

    opacity.value = withSpring(AnimationOptions.opacity.max, {
      stiffness: AnimationOptions.stiffness,
    });

    transformX.value = withSpring(AnimationOptions.translationX.start, {
      damping: AnimationOptions.damping,
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transformX.value }],
      opacity: opacity.value,
    };
  });

  return (
    <PanGesture
      onStart={onStart}
      onUpdate={onUpdate}
      onEnd={onEnd}
      dependencies={[transformX.value, opacity.value]}
    >
      <Animated.View style={[styles.container, animatedStyles]}>{children}</Animated.View>
    </PanGesture>
  );
}
