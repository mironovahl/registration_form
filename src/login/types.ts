export enum FormStepsEnum {
  userDataStep = 'userData',
  emailStep = 'email',
  passwordStep = 'password',
}

export type TFormStep = {
  label: FormStepsEnum
  value: string
}

export type InputData = {
  name: string
  label: string
  requiredErrorMsg?: string
  invalidErrorMsg?: string
}

export type TFormInitialValues = {
  firstName: ''
}

export enum FormFieldEnum {
  firstNameField = 'firstName',
  lastNameField = 'lastName',
  patronymicField = 'patronymic',
  dateOfBirthField = 'dateOfBirth',
  emailField = 'email',
  passwordField = 'password',
}

export type TFormField = {
  name: string
  label: string
  requiredErrorMsg?: string
}

export type TFormFields = {
  FormFieldEnum: TFormField
}
