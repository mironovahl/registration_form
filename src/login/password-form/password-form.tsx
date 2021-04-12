import { Form, Formik } from 'formik'
import React, { ReactElement, ReactNode, useCallback } from 'react'

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

  const onSubmit = useCallback(() => {
    onNext()
  }, [onNext])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <Input
          type={'password'}
          name={passwordFormField.password.name}
          label={passwordFormField.password.label}
          required
        />
        <Input
          type={'password'}
          name={passwordFormField.confirmPassword.name}
          label={passwordFormField.confirmPassword.label}
          required
        />
        {children}
      </Form>
    </Formik>
  )
}
