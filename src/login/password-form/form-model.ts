enum PasswordFieldEnum {
  passwordField = 'password',
  confirmPasswordField = 'confirmPassword',
}

export const passwordFormField = {
  [PasswordFieldEnum.passwordField]: {
    name: 'password',
    label: 'Password',
    requiredErrorMsg: 'password is required',
    lengthErrorMsg: 'Password is too short - should be 6 chars minimum.',
  },
  [PasswordFieldEnum.confirmPasswordField]: {
    name: 'confirmPassword',
    label: 'Confirm password',
    requiredErrorMsg: 'Confirm password is required',
    matchErrorMsg: 'Passwords must match',
  },
}
