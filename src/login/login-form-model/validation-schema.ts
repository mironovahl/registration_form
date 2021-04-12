import * as yup from 'yup'

import { formField } from './login-form-model'

const latinRegexp = new RegExp('^[A-Za-z]+$')

export const validationSchema = [
  yup.object().shape({
    [formField.firstName.name]: yup
      .string()
      .min(3)
      .required(formField.firstName.requiredErrorMsg)
      .matches(latinRegexp, formField.firstName.invalidErrorMsg),
    [formField.lastName.name]: yup
      .string()
      .min(3)
      .required(formField.lastName.requiredErrorMsg),
    [formField.patronymic.name]: yup
      .string()
      .required(formField.patronymic.requiredErrorMsg),
    [formField.dateOfBirth.name]: yup
      .date()
      .default(function () {
        return new Date()
      })
      .required(),
  }),
  yup.object().shape({
    [formField.email.name]: yup.string().email().required('Email is required'),
  }),
  yup.object().shape({
    [formField.password.name]: yup.string().min(6).required(),
    [formField.repeatPassword.name]: yup.string().required(),
  }),
]
