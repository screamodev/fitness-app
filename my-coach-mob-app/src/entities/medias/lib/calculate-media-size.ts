import { MediaAspectRatio } from 'shared/config/medias';
import { ScreenSize } from 'shared/config/screen-size';

export const calculateMediaSize = (screenWidth: number) => {
  const defaultMediaContainerWidth = 350;
  const containerPadding = 36;
  const marginLeft = 14;

  let width;

  if (screenWidth < ScreenSize.width.mobile) {
    width = screenWidth - containerPadding;
  } else if (screenWidth < ScreenSize.width.tablet) {
    width = (screenWidth - containerPadding - marginLeft) / 2;
  } else if (screenWidth < ScreenSize.width.laptop) {
    width = (screenWidth - containerPadding - marginLeft * 2) / 3;
  } else {
    width = defaultMediaContainerWidth;
  }

  const height = width / MediaAspectRatio;

  return { width, height };
};
