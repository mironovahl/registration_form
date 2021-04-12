import React, { ReactElement, useState } from 'react'
import { Button } from '@material-ui/core'

import { StepProgress } from './step-progress'
import { FormStepsEnum, TFormStep } from './types'
import { LoginSuccess } from './login-success'
import { UserDataForm } from './user-data-form'
import { EmailForm } from './email-form'
import { PasswordForm } from './password-form'

const formSteps: TFormStep[] = [
  {
    label: FormStepsEnum.userDataStep,
    value: 'data user',
  },
  {
    label: FormStepsEnum.emailStep,
    value: 'email',
  },
  {
    label: FormStepsEnum.passwordStep,
    value: 'password',
  },
]

const FormSteps = {
  [FormStepsEnum.userDataStep]: UserDataForm,
  [FormStepsEnum.emailStep]: EmailForm,
  [FormStepsEnum.passwordStep]: PasswordForm,
}

export const LoginForm = (): ReactElement => {
  const [activeStep, setActiveStep] = useState(0)

  const isLastStep = activeStep === formSteps.length - 1
  const isFirstStep = activeStep === 0

  const submitForm = (values, actions) => {
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)

    setActiveStep(activeStep + 1)
  }

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions)
    } else {
      setActiveStep(prevState => prevState + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  const nextStepClick = () => {
    setActiveStep(prevState => prevState + 1)
  }

  const previousStepClick = () => {
    setActiveStep(prevState => prevState - 1)
  }
  const FormContent = FormSteps[formSteps[activeStep].label]
  return (
    <div>
      <StepProgress
        activeStep={activeStep}
        totalSteps={formSteps.length}
        steps={formSteps}
      />

      <FormContent onNext={nextStepClick}>
        <Button type="submit" variant="contained" color="primary">
          {!isLastStep ? 'Next' : 'Sign In'}
        </Button>
      </FormContent>

      {isLastStep && <LoginSuccess />}

      {!isFirstStep && (
        <Button onClick={previousStepClick} variant="contained" color="primary">
          Previous
        </Button>
      )}
    </div>
  )
}
