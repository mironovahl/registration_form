import { FormStepsEnum, TFormStep } from 'src/types'

export const formSteps: TFormStep[] = [
  {
    label: 'Personal Information',
    value: FormStepsEnum.personalInfoStep,
  },
  {
    label: 'Email',
    value: FormStepsEnum.emailStep,
  },
  {
    label: 'Password',
    value: FormStepsEnum.passwordStep,
  },
]
