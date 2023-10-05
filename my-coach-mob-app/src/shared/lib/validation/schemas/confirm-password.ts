import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';

export const getConfirmPasswordValidationSchema = (t: TranslateFunction, passwordKey: string) =>
  Yup.string()
    .required(t('errors.password.confirmRequired'))
    .oneOf([Yup.ref(passwordKey)], t('errors.password.notMatch'));
