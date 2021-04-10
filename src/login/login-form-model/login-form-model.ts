import { FormFieldEnum } from '../types'

export const formField = {
  [FormFieldEnum.firstNameField]: {
    name: 'firstName',
    label: 'First name*',
    requiredErrorMsg: 'First name is required',
  },
  [FormFieldEnum.lastNameField]: {
    name: 'lastName',
    label: 'Last name*',
    requiredErrorMsg: 'Last name is required',
  },
  [FormFieldEnum.patronymicField]: {
    name: 'patronymic',
    label: 'patronymic name*',
    requiredErrorMsg: 'patronymic is required',
  },
}

const registrationFormModel = {
  formId: 'checkoutForm',
  formField: formField,
}

export const formInitialValues = {
  [FormFieldEnum.firstNameField]: '',
  [FormFieldEnum.lastNameField]: '',
  [FormFieldEnum.patronymicField]: '',
  [FormFieldEnum.dateOfBirthField]: '',
  [FormFieldEnum.emailField]: '',
  [FormFieldEnum.passwordField]: '',
}
