import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import {
  getConfirmPasswordValidationSchema,
  getPasswordValidationSchema,
} from 'shared/lib/validation';

export const getPasswordsValidationSchema = (t: TranslateFunction) => {
  return Yup.object({
    currentPassword: Yup.string().required(t('errors.password.required')),
    newPassword: getPasswordValidationSchema(t),
    confirmPassword: getConfirmPasswordValidationSchema(t, 'newPassword'),
  });
};
