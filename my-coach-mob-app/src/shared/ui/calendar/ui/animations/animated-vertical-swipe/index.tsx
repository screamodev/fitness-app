import { ReactNode } from 'react';
import { Platform } from 'react-native';
import 'setimmediate';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { PanGesture, PanGestureStateChangeEvent, PanGestureUpdateEvent } from 'shared/ui/gestures';
import { CalendarMode } from '../../../config';
import { SwipeBar } from './swipe-bar';
import { styles } from './styles';

const AnimationOptions = {
  opacity: { min: 0, max: 1 },
  transformY: { start: 86, end: 330, max: '100%' },
  translationY: { start: 0, middle: 100, max: 215, minMiddle: -30, min: -200 },
  damping: 15,
  stiffness: 50,
};

type AnimatedVerticalSwipeProps = {
  children: ReactNode;
  isSwipingUp: boolean;
  onVerticalSwipe: (mode: CalendarMode) => void;
};

export function AnimatedVerticalSwipe(props: AnimatedVerticalSwipeProps) {
  const { children, isSwipingUp, onVerticalSwipe } = props;

  const transformY = useSharedValue<number | string>(AnimationOptions.transformY.start);

  const opacity = useSharedValue<number>(AnimationOptions.opacity.max);

  const animateWithSpring = (option: number) => {
    return withSpring(option, {
      stiffness: AnimationOptions.stiffness,
    });
  };

  const onUpdate = (event: PanGestureUpdateEvent) => {
    if (
      isSwipingUp &&
      event.translationY > AnimationOptions.translationY.start &&
      event.translationY <= AnimationOptions.transformY.end
    ) {
      transformY.value = AnimationOptions.transformY.start + event.translationY;

      if (event.translationY > AnimationOptions.translationY.middle) {
        opacity.value = animateWithSpring(AnimationOptions.opacity.min);
      }

      if (event.translationY >= AnimationOptions.translationY.max) {
        onVerticalSwipe(CalendarMode.month);
        opacity.value = animateWithSpring(AnimationOptions.opacity.max);
      }
    }

    if (!isSwipingUp && event.translationY < AnimationOptions.translationY.start) {
      transformY.value = AnimationOptions.transformY.end + event.translationY;
      opacity.value = animateWithSpring(AnimationOptions.opacity.min);

      if (event.translationY < AnimationOptions.translationY.minMiddle) {
        opacity.value = animateWithSpring(AnimationOptions.opacity.min);
      }

      if (event.translationY < AnimationOptions.translationY.min) {
        onVerticalSwipe(CalendarMode.week);
        opacity.value = animateWithSpring(AnimationOptions.opacity.max);
      }
    }
  };

  const onEnd = (event: PanGestureStateChangeEvent) => {
    if (
      isSwipingUp &&
      event.translationY < AnimationOptions.translationY.max &&
      event.translationY > AnimationOptions.translationY.start
    ) {
      transformY.value = animateWithSpring(AnimationOptions.transformY.start);
    }

    if (
      !isSwipingUp &&
      event.translationY > AnimationOptions.translationY.min &&
      event.translationY < AnimationOptions.translationY.start
    ) {
      transformY.value = animateWithSpring(AnimationOptions.transformY.end);
    }

    if (isSwipingUp && event.translationY < AnimationOptions.translationY.min) {
      transformY.value = withSpring(AnimationOptions.transformY.start);
    }

    if (!isSwipingUp) {
      transformY.value = withSpring(AnimationOptions.transformY.max);
    }

    if (!isSwipingUp && Platform.OS === 'web') {
      transformY.value = AnimationOptions.transformY.max;
    }

    opacity.value = animateWithSpring(AnimationOptions.opacity.max);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: transformY.value,
      opacity: opacity.value,
    };
  });

  return (
    <PanGesture onUpdate={onUpdate} onEnd={onEnd} dependencies={[transformY.value]}>
      <Animated.View style={[styles.container, animatedStyles]}>
        {children}
        <SwipeBar />
      </Animated.View>
    </PanGesture>
  );
}
