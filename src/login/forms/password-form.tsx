import React, { ReactElement } from 'react'

import { InputField } from '../form-field/input-field'
import { formField } from '../login-form-model/login-form-model'

export const PasswordForm = (): ReactElement => {
  return (
    <>
      <InputField
        name={formField.password.name}
        label={formField.password.label}
      />
      <InputField
        name={formField.repeatPassword.name}
        label={formField.repeatPassword.label}
      />
    </>
  )
}
