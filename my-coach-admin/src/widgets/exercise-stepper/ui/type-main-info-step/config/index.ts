import * as Yup from 'yup';

const nameValidationSchema = Yup.string()
  .trim()
  .min(3, 'errors.exercise.name.minLength')
  .max(100, 'errors.exercise.name.maxLength')
  .required('errors.exercise.name.required');

export const namesValidationSchema = Yup.object({
  name: nameValidationSchema,
  nameUk: nameValidationSchema,
});
