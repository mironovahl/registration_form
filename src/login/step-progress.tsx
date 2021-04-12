import React, { ReactElement } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'

import { formSteps } from './steps'

interface IStepProgressProps {
  activeStep: number
}

export const StepProgress = ({
  activeStep,
}: IStepProgressProps): ReactElement => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {formSteps.map(({ label }) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
