enum EmailFieldEnum {
  emailField = 'email',
}

export const emailFormField = {
  [EmailFieldEnum.emailField]: {
    name: 'email',
    label: 'email name',
    requiredErrorMsg: 'email is required',
  },
}
