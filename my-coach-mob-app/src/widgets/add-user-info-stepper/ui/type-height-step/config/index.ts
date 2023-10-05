import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { getHeightValidationSchema } from 'shared/lib/validation';

export const getHeightFormValidationSchema = (t: TranslateFunction) => {
  return Yup.object().shape({
    height: getHeightValidationSchema(t, false),
  });
};
