import { Form, Formik } from 'formik'
import React, { ReactElement, ReactNode, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addEmail, selectEmail } from 'src/store'
import { AddEmailPayload } from 'src/store/slice'
import { Input } from 'src/ui/input'

import { emailFormField } from './form-model'
import { validationSchema } from './validation-schema'

type Props = {
  onNext: () => void
  children: ReactNode
}

export const EmailForm = (props: Props): ReactElement => {
  const { onNext, children } = props
  const email = useSelector(selectEmail)
  const initialValues = { email }

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (values: AddEmailPayload) => {
      dispatch(addEmail(values))
      onNext()
    },
    [dispatch, onNext],
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <Input
          name={emailFormField.email.name}
          label={emailFormField.email.label}
          required
        />
        {children}
      </Form>
    </Formik>
  )
}
