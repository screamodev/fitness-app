import { Font, FontWeight } from 'shared/config/font';

export type FontStyles = {
  fontFamily: string;
  fontWeight: FontWeight;
};

export const getFont = (fontWeight: FontWeight): FontStyles => {
  return {
    fontFamily: Font.family[fontWeight],
    fontWeight,
  };
};
