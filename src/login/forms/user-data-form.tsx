import { Button } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { InputField } from '../form-field/input-fields'
import { formField } from '../login-form-model/login-form-model'

export const UserDataForm = (): ReactElement => {
  return (
    <>
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
      <Button></Button>
    </>
  )
}
