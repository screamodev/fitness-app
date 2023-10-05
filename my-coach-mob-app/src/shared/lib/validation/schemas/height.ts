import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { userLimits } from 'shared/config/user';
import { transformDecimal } from '../transform';

export const getHeightValidationSchema = (t: TranslateFunction, isMessageShown = true) =>
  Yup.number()
    .transform(transformDecimal)
    .min(userLimits.height.min, isMessageShown ? t('errors.height.min') : undefined)
    .max(userLimits.height.max, isMessageShown ? t('errors.height.max') : undefined);
