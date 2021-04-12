import React, { ReactElement, ReactNode, useCallback } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { selectPersonalInfo } from 'src/store'
import { addPersonalInfo, AddPersonalPayload } from 'src/store/slice'

import { DatePicker } from '../../ui/date-picker'
import { Input } from '../../ui/input'

import { validationSchema } from './validation-schema'
import { personalInfo } from './form-model'
import { useStyles } from '../styles'

type Props = {
  onNext: () => void
  children: ReactNode
}

export const PersonalInfoForm = (props: Props): ReactElement => {
  const { onNext, children } = props
  const initialValues = useSelector(selectPersonalInfo)

  const classes = useStyles()

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (values: AddPersonalPayload) => {
      dispatch(
        addPersonalInfo({ ...values, birthDate: String(values.birthDate) }),
      )
      onNext()
    },
    [dispatch, onNext],
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className={classes.form}>
        <Input
          name={personalInfo.firstName.name}
          label={personalInfo.firstName.label}
          required
        />
        <Input
          name={personalInfo.lastName.name}
          label={personalInfo.lastName.label}
          required
        />
        <Input
          name={personalInfo.patronymic.name}
          label={personalInfo.patronymic.label}
          required
        />
        <DatePicker
          name={personalInfo.birthDate.name}
          label={personalInfo.birthDate.label}
          required
        />
        {children}
      </Form>
    </Formik>
  )
}
