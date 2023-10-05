import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { usernameExpression } from 'shared/config/regex';
import { userLimits } from 'shared/config/user';

export const getUsernameValidationSchema = (t: TranslateFunction, usernameExists: boolean) =>
  Yup.string()
    .required(t('errors.username.required'))
    .matches(usernameExpression, t('errors.username.invalid'))
    .min(userLimits.username.min, t('errors.username.tooShort'))
    .max(userLimits.username.max, t('errors.username.tooLong'))
    .test('usernameExists', t('errors.username.unavailable'), () => !usernameExists);
