import React, { ReactElement } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { TFormStep } from './types'

interface IStepProgressProps {
  activeStep: number
  totalSteps: number
  steps: TFormStep[]
}

export const StepProgress = ({
  activeStep,
  totalSteps,
  steps,
}: IStepProgressProps): ReactElement => {
  const isLastStep = activeStep === totalSteps

  return (
    <Stepper activeStep={activeStep}>
      {steps.map(({ label }) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
