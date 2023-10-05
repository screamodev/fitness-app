import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import {
  getEmailValidationSchema,
  getFullNameValidationSchema,
  getHeightValidationSchema,
  getUsernameValidationSchema,
  getWeightValidationSchema,
} from 'shared/lib/validation';

export const getProfileValidationSchema = (
  t: TranslateFunction,
  usernameExists: boolean,
  emailExists: boolean,
) => {
  const emailValidationSchema = getEmailValidationSchema(t);

  return Yup.object({
    fullName: getFullNameValidationSchema(t),
    username: getUsernameValidationSchema(t, usernameExists),
    email: Yup.string()
      .test('emailExists', t('errors.email.unavailable'), () => !emailExists)
      .concat(emailValidationSchema),
    height: getHeightValidationSchema(t),
    weight: getWeightValidationSchema(t),
  });
};
