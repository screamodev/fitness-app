import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { getEmailValidationSchema, getPasswordValidationSchema } from 'shared/lib/validation';

export const getSignInValidationSchema = (t: TranslateFunction) => {
  return Yup.object({
    email: getEmailValidationSchema(t),
    password: getPasswordValidationSchema(t),
  });
};
