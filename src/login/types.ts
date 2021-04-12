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

export type TFormField = {
  name: string
  label: string
  requiredErrorMsg?: string
  invalidErrorMsg?: string
}
