import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { getUsernameValidationSchema } from 'shared/lib/validation';

export const getUsernameFormValidationSchema = (t: TranslateFunction, usernameExists: boolean) => {
  return Yup.object().shape({
    username: getUsernameValidationSchema(t, usernameExists),
  });
};
