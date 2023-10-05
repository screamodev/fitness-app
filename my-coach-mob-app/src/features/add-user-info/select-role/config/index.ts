import { TranslateFunction } from 'shared/config/language';
import { Role } from 'shared/config/user';

export const getRoles = (t: TranslateFunction) => [
  {
    key: Role.trainee,
    title: t('addUserInfo.roleStep.trainee.title'),
    description: t('addUserInfo.roleStep.trainee.description'),
    image: require('../assets/images/man-with-barbell.jpg'),
  },
  {
    key: Role.coach,
    title: t('addUserInfo.roleStep.coach.title'),
    description: t('addUserInfo.roleStep.coach.description'),
    image: require('../assets/images/woman-with-cross-hands.jpg'),
  },
];
