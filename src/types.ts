export enum FormStepsEnum {
  personalInfoStep = 'personalInfo',
  emailStep = 'email',
  passwordStep = 'password',
}

export type TFormStep = {
  label: string
  value: FormStepsEnum
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
