import React, { ReactElement } from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

type TInputType = 'text' | 'password'

interface IInputProps {
  name: string
  label: string
  required?: boolean
  type?: TInputType
}

export const Input = (props: IInputProps): ReactElement => {
  const [field, meta] = useField(props)

  return (
    <TextField
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
    />
  )
}
