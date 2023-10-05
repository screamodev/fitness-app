import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { getWeightValidationSchema } from 'shared/lib/validation';

export const getWeightFormValidationSchema = (t: TranslateFunction) => {
  return Yup.object().shape({
    weight: getWeightValidationSchema(t, false),
  });
};
