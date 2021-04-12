import React, { ReactElement } from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

interface IInputFieldProps {
  name: string
  label: string
}

export const InputField = (props: IInputFieldProps): ReactElement => {
  const [field, meta] = useField(props)

  return (
    <TextField
      required
      fullWidth
      type="text"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
    />
  )
}
