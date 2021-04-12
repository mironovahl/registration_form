import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { Box, Button, Container } from '@material-ui/core'

import { FormStepsEnum } from 'src/types'

import { PersonalInfoForm } from './personal-info-form'
import { EmailForm } from './email-form'
import { PasswordForm } from './password-form'
import { formSteps } from './steps'

const FormSteps = {
  [FormStepsEnum.personalInfoStep]: PersonalInfoForm,
  [FormStepsEnum.emailStep]: EmailForm,
  [FormStepsEnum.passwordStep]: PasswordForm,
}

interface ILoginFormProps {
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
}

export const LoginForm = ({
  activeStep,
  setActiveStep,
}: ILoginFormProps): ReactElement => {
  const isLastStep = activeStep === formSteps.length - 1
  const isFirstStep = activeStep === 0

  const nextStepClick = () => {
    setActiveStep(prevState => prevState + 1)
  }

  const previousStepClick = () => {
    setActiveStep(prevState => prevState - 1)
  }

  const FormContent = FormSteps[formSteps[activeStep].value]

  return (
    <Container maxWidth="xs">
      <FormContent onNext={nextStepClick}>
        <Box display={'flex'} justifyContent={'space-between'} my={2}>
          {!isFirstStep && (
            <Button
              onClick={previousStepClick}
              variant="outlined"
              color="primary">
              Previous
            </Button>
          )}

          <Button
            type="submit"
            variant="contained"
            disableElevation
            color="primary">
            {!isLastStep ? 'Next' : 'Sign In'}
          </Button>
        </Box>
      </FormContent>
    </Container>
  )
}
