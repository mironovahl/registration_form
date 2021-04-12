enum EmailFieldEnum {
  emailField = 'email',
}

export const emailFormField = {
  [EmailFieldEnum.emailField]: {
    name: 'email',
    label: 'Email',
    requiredErrorMsg: 'Email is required',
  },
}
