import * as yup from 'yup'

import { userDataFormField } from './form-model'

const latinRegexp = new RegExp('^[A-Za-z]+$')

export const validationSchema = yup.object().shape({
  [userDataFormField.firstName.name]: yup
    .string()
    .min(3, userDataFormField.firstName.lengthErrorMsg)
    .required(userDataFormField.firstName.requiredErrorMsg)
    .matches(latinRegexp, userDataFormField.firstName.invalidErrorMsg),
  [userDataFormField.lastName.name]: yup
    .string()
    .min(3, userDataFormField.lastName.lengthErrorMsg)
    .required(userDataFormField.lastName.requiredErrorMsg),
  [userDataFormField.patronymic.name]: yup
    .string()
    .min(3, userDataFormField.patronymic.lengthErrorMsg)
    .required(userDataFormField.patronymic.requiredErrorMsg),
  [userDataFormField.birthDate.name]: yup
    .date()
    .default(function () {
      return new Date()
    })
    .required(userDataFormField.birthDate.requiredErrorMsg),
})
