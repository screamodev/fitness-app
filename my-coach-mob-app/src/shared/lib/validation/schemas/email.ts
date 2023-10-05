import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';

export const getEmailValidationSchema = (t: TranslateFunction) =>
  Yup.string().required(t('errors.email.required')).email(t('errors.email.invalid'));
