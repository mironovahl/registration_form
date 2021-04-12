import * as yup from 'yup'

import { personalInfo } from './form-model'

const latinRegexp = new RegExp('^[A-Za-z]+$')

export const validationSchema = yup.object().shape({
  [personalInfo.firstName.name]: yup
    .string()
    .min(3, personalInfo.firstName.lengthErrorMsg)
    .required(personalInfo.firstName.requiredErrorMsg)
    .matches(latinRegexp, personalInfo.firstName.invalidErrorMsg),
  [personalInfo.lastName.name]: yup
    .string()
    .min(3, personalInfo.lastName.lengthErrorMsg)
    .required(personalInfo.lastName.requiredErrorMsg),
  [personalInfo.patronymic.name]: yup
    .string()
    .min(3, personalInfo.patronymic.lengthErrorMsg)
    .required(personalInfo.patronymic.requiredErrorMsg),
  [personalInfo.birthDate.name]: yup
    .date()
    .max(new Date())
    .default(function () {
      return new Date()
    })
    .required(personalInfo.birthDate.requiredErrorMsg),
})
