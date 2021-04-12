import * as yup from 'yup'

import { emailFormField } from './form-model'

export const validationSchema = yup.object().shape({
  [emailFormField.email.name]: yup
    .string()
    .email()
    .required('Email is required'),
})
