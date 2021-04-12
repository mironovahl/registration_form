import React, { ReactElement, useEffect, useState } from 'react'
import { useField } from 'formik'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

interface IInputFieldProps {
  name: string
  label: string
  required?: boolean
}

export const DatePicker = (props: IInputFieldProps): ReactElement => {
  const [field, meta, helper] = useField(props)
  const { setValue } = helper
  const { value } = field
  const [date, setDate] = useState<Date | null>(null)

  useEffect(() => {
    if (value) {
      const date = new Date(value)
      setDate(date)
    }
  }, [value])

  const onChange = date => {
    if (date) {
      setDate(date)
      setValue(date)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...field}
        {...props}
        fullWidth
        format="dd/MM/yyyy"
        value={date}
        onChange={onChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        invalidDateMessage={meta.touched && Boolean(meta.error)}
      />
    </MuiPickersUtilsProvider>
  )
}
