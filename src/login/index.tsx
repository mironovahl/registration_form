import React, { ReactElement, useState } from 'react'
import { Container, Paper, Typography } from '@material-ui/core'

import { StepProgress } from './step-progress'
import { LoginSuccess } from './login-success'
import { LoginForm } from './login-form'
import { formSteps } from './steps'

export const Login = (): ReactElement => {
  const [activeStep, setActiveStep] = useState(0)

  const isStepsEnd = activeStep === formSteps.length

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '24px' }}>
        <Typography variant="h4">Sign In</Typography>

        <StepProgress activeStep={activeStep} />

        {isStepsEnd ? (
          <LoginSuccess />
        ) : (
          <LoginForm activeStep={activeStep} setActiveStep={setActiveStep} />
        )}
      </Paper>
    </Container>
  )
}
