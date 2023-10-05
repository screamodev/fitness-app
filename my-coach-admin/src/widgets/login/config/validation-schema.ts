import * as Yup from 'yup';

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email('errors.login.email.notValid').required('errors.login.email.required'),
  password: Yup.string().required('errors.login.password.required'),
});
