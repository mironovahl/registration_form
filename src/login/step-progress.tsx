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
  steps,
}: IStepProgressProps): ReactElement => {
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
