import React, { ReactElement, ReactNode, useCallback } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserData } from 'src/store'
import { addUserData, AddUserPayload } from 'src/store/slice'

import { DatePicker } from '../../ui/date-picker'
import { Input } from '../../ui/input'

import { validationSchema } from './validation-schema'
import { userDataFormField } from './form-model'

type Props = {
  onNext: () => void
  children: ReactNode
}

export const UserDataForm = (props: Props): ReactElement => {
  const { onNext, children } = props
  const initialValues = useSelector(selectUserData)

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (values: AddUserPayload) => {
      dispatch(addUserData(values))
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
          name={userDataFormField.firstName.name}
          label={userDataFormField.firstName.label}
        />
        <Input
          name={userDataFormField.lastName.name}
          label={userDataFormField.lastName.label}
        />
        <Input
          name={userDataFormField.patronymic.name}
          label={userDataFormField.patronymic.label}
        />
        <DatePicker
          name={userDataFormField.birthDate.name}
          label={userDataFormField.birthDate.label}
        />
        {children}
      </Form>
    </Formik>
  )
}
