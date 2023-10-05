import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { passwordExpression } from 'shared/config/regex';

export const getPasswordValidationSchema = (t: TranslateFunction) =>
  Yup.string()
    .required(t('errors.password.createRequired'))
    .min(6, t('errors.password.invalid'))
    .matches(passwordExpression, t('errors.password.invalid'));
