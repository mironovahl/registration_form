import React, { ReactElement, ReactNode, useCallback } from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserData } from 'src/store'
import { addUserData, AddUserPayload } from 'src/store/slice'

import { DateField } from '../form-field/date-field'
import { InputField } from '../form-field/input-field'
import { formField } from '../login-form-model/login-form-model'

const latinRegexp = new RegExp('^[A-Za-z]+$')

const schema = yup.object().shape({
  [formField.firstName.name]: yup
    .string()
    .min(3)
    .required(formField.firstName.requiredErrorMsg)
    .matches(latinRegexp, formField.firstName.invalidErrorMsg),
  [formField.lastName.name]: yup
    .string()
    .min(3)
    .required(formField.lastName.requiredErrorMsg),
  [formField.patronymic.name]: yup
    .string()
    .required(formField.patronymic.requiredErrorMsg),
  [formField.dateOfBirth.name]: yup
    .date()
    .default(function () {
      return new Date()
    })
    .required(),
})

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
      validationSchema={schema}
      onSubmit={onSubmit}>
      <Form>
        <InputField
          name={formField.firstName.name}
          label={formField.firstName.label}
        />
        <InputField
          name={formField.lastName.name}
          label={formField.lastName.label}
        />
        <InputField
          name={formField.patronymic.name}
          label={formField.patronymic.label}
        />
        <DateField
          name={formField.dateOfBirth.name}
          label={formField.patronymic.label}
        />
        {children}
      </Form>
    </Formik>
  )
}
