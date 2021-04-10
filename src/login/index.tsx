import React, { ReactElement, useState } from 'react'
import { Button } from '@material-ui/core'

import { EmailForm, PasswordForm, UserDataForm } from './forms'
import { StepProgress } from './step-progress'
import { FormStepsEnum, TFormStep } from './types'
import { LoginSuccess } from './login-success'
import { Formik } from 'formik'
import { formInitialValues } from './login-form-model/login-form-model'

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

  const isLastStep = activeStep === formSteps.length

  console.log(isLastStep, activeStep, formSteps.length)

  const handleClick = () => {
    setActiveStep(prevState => prevState + 1)
  }
  const FormContent = FormSteps[formSteps[activeStep].label]
  return (
    <div>
      <StepProgress
        activeStep={activeStep}
        totalSteps={formSteps.length}
        steps={formSteps}
      />
      <Formik
        initialValues={formInitialValues}
        // validationSchema={currentValidationSchema}
        // onSubmit={_handleSubmit}
      >
        <FormContent />
      </Formik>
      {isLastStep && <LoginSuccess />}
      <Button
        onClick={handleClick}
        type="submit"
        variant="contained"
        color="primary">
        Next
      </Button>
    </div>
  )
}
