import { Form, Formik } from 'formik'
import React, { ReactElement, ReactNode, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectEmail, selectUserData } from 'src/store'

import { Input } from 'src/ui/input'

import { passwordFormField } from './form-model'
import { validationSchema } from './validation-schema'

type Props = {
  onNext: () => void
  children: ReactNode
}

const initialValues = {
  [passwordFormField.password.name]: '',
  [passwordFormField.confirmPassword.name]: '',
}

export const PasswordForm = (props: Props): ReactElement => {
  const { onNext, children } = props

  const state = useSelector(state => state)
  const submitForm = (values, actions) => {
    alert(JSON.stringify(state, null, 2))
    actions.setSubmitting(false)
  }

  const onSubmit = useCallback(() => {
    onNext()
  }, [onNext])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}>
      <Form>
        <Input
          type={'password'}
          name={passwordFormField.password.name}
          label={passwordFormField.password.label}
        />
        <Input
          type={'password'}
          name={passwordFormField.confirmPassword.name}
          label={passwordFormField.confirmPassword.label}
        />
        {children}
      </Form>
    </Formik>
  )
}
