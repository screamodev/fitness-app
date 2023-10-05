import { Platform } from 'react-native';

import { useLayout } from 'shared/lib/layout';
import { useLanguage } from 'shared/lib/localization';
import { Slider, SliderItem } from 'shared/ui/slider';
import { getSlides } from '../config';

export function IntroSlider() {
  const { t } = useLanguage();

  const { isLandscape } = useLayout();

  const slides = getSlides(t);

  if (Platform.OS === 'web') {
    return <SliderItem isLandscape={isLandscape} item={slides[0]} />;
  }

  return <Slider slides={slides} />;
}
