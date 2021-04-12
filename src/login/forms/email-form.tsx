import { Form, Formik } from 'formik'
import React, { ReactElement, ReactNode, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmail, selectEmail } from 'src/store'
import { AddEmailPayload } from 'src/store/slice'
import * as yup from 'yup'

import { InputField } from '../form-field/input-field'
import { formField } from '../login-form-model/login-form-model'

type Props = {
  onNext: () => void
  children: ReactNode
}

const schema = yup.object().shape({
  [formField.email.name]: yup.string().email().required('Email is required'),
})

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
      validationSchema={schema}
      onSubmit={onSubmit}>
      <Form>
        <InputField name={formField.email.name} label={formField.email.label} />
        {children}
      </Form>
    </Formik>
  )
}
