import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { nameExpression } from 'shared/config/regex';
import { userLimits } from 'shared/config/user';

export const getFullNameValidationSchema = (t: TranslateFunction) =>
  Yup.string()
    .required(t('errors.fullName.required'))
    .min(userLimits.fullName.min, t('errors.fullName.tooShort'))
    .max(userLimits.fullName.max, t('errors.fullName.tooLong'))
    .matches(nameExpression, t('errors.fullName.invalid'));
