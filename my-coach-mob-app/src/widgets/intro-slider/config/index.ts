import { TranslateFunction } from 'shared/config/language';

export const getSlides = (t: TranslateFunction) => [
  {
    title: t('intro.welcomeSlide.title'),
    text: t('intro.welcomeSlide.description'),
    image: require('../assets/images/fit-man.jpg'),
  },
  {
    title: t('intro.coachSlide.title'),
    text: t('intro.coachSlide.description'),
    image: require('../assets/images/coach.jpg'),
  },
  {
    title: t('intro.communitySlide.title'),
    text: t('intro.communitySlide.description'),
    image: require('../assets/images/fit-woman.jpg'),
  },
];
