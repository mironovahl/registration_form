import * as yup from 'yup'

import { passwordFormField } from './form-model'

export const validationSchema = yup.object().shape({
  [passwordFormField.password.name]: yup
    .string()
    .min(6)
    .required(passwordFormField.password.requiredErrorMsg),
  [passwordFormField.confirmPassword.name]: yup
    .string()
    .oneOf(
      [yup.ref(passwordFormField.password.name), null],
      passwordFormField.confirmPassword.matchErrorMsg,
    )
    .required(passwordFormField.confirmPassword.requiredErrorMsg),
})
