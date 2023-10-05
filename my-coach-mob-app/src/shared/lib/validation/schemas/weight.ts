import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { userLimits } from 'shared/config/user';
import { transformDecimal } from '../transform';

export const getWeightValidationSchema = (t: TranslateFunction, isMessageShown = true) =>
  Yup.number()
    .transform(transformDecimal)
    .min(userLimits.weight.min, isMessageShown ? t('errors.weight.min') : undefined)
    .max(userLimits.weight.max, isMessageShown ? t('errors.weight.max') : undefined);
