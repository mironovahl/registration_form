import { FormFieldEnum } from '../types'

export const formField = {
  [FormFieldEnum.firstNameField]: {
    name: 'firstName',
    label: 'First name',
    requiredErrorMsg: 'First name is required',
    invalidErrorMsg: 'First name can contain only latin characters',
  },
  [FormFieldEnum.lastNameField]: {
    name: 'lastName',
    label: 'Last name',
    requiredErrorMsg: 'Last name is required',
    invalidErrorMsg: 'Last name can contain only latin characters',
  },
  [FormFieldEnum.patronymicField]: {
    name: 'patronymic',
    label: 'Patronymic name',
    requiredErrorMsg: 'patronymic is required',
    invalidErrorMsg: 'Patronymic can contain only latin characters',
  },
  [FormFieldEnum.dateOfBirthField]: {
    name: 'dateOfBirth',
    label: 'Date of',
    requiredErrorMsg: 'patronymic is required',
  },
  [FormFieldEnum.emailField]: {
    name: 'email',
    label: 'email name',
    requiredErrorMsg: 'email is required',
  },
  [FormFieldEnum.passwordField]: {
    name: 'password',
    label: 'Password',
    requiredErrorMsg: 'password is required',
  },
  [FormFieldEnum.repeatPasswordField]: {
    name: 'repeatPassword',
    label: 'Repeat password',
    requiredErrorMsg: 'password is required',
  },
}
