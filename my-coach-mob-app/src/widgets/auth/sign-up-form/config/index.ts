import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import {
  getConfirmPasswordValidationSchema,
  getEmailValidationSchema,
  getFullNameValidationSchema,
  getPasswordValidationSchema,
} from 'shared/lib/validation';

export const getSignUpValidationSchema = (t: TranslateFunction) => {
  return Yup.object({
    fullName: getFullNameValidationSchema(t),
    email: getEmailValidationSchema(t),
    password: getPasswordValidationSchema(t),
    repeatedPassword: getConfirmPasswordValidationSchema(t, 'password'),
  });
};
