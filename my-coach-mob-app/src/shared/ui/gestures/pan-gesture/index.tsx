import { ReactNode, useMemo } from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export type PanGestureUpdateEvent = GestureUpdateEvent<PanGestureHandlerEventPayload>;

export type PanGestureStateChangeEvent = GestureStateChangeEvent<PanGestureHandlerEventPayload>;

type PanGestureProps = {
  children: ReactNode;
  onStart?: (event: PanGestureStateChangeEvent) => void;
  onUpdate?: (event: PanGestureUpdateEvent) => void;
  onEnd?: (event: PanGestureStateChangeEvent) => void;
  dependencies: Array<number | string | boolean>;
};

export function PanGesture(props: PanGestureProps) {
  const { onStart = () => null, onUpdate, onEnd, dependencies, children } = props;

  const panGesture = useMemo(
    () => Gesture.Pan().runOnJS(true).onStart(onStart).onUpdate(onUpdate).onEnd(onEnd),
    dependencies,
  );

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>{children}</GestureDetector>
    </GestureHandlerRootView>
  );
}
