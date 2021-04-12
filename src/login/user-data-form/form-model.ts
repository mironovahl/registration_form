enum UserDataFieldEnum {
  firstNameField = 'firstName',
  lastNameField = 'lastName',
  patronymicField = 'patronymic',
  birthDateField = 'birthDate',
}

export const userDataFormField = {
  [UserDataFieldEnum.firstNameField]: {
    name: 'firstName',
    label: 'First name',
    requiredErrorMsg: 'First name is required',
    invalidErrorMsg: 'First name can contain only latin characters',
    lengthErrorMsg: 'First name is too short - should be 3 chars minimum.',
  },
  [UserDataFieldEnum.lastNameField]: {
    name: 'lastName',
    label: 'Last name',
    requiredErrorMsg: 'Last name is required',
    invalidErrorMsg: 'Last name can contain only latin characters',
    lengthErrorMsg: 'Last name is too short - should be 3 chars minimum.',
  },
  [UserDataFieldEnum.patronymicField]: {
    name: 'patronymic',
    label: 'Patronymic',
    requiredErrorMsg: 'patronymic is required',
    invalidErrorMsg: 'Patronymic can contain only latin characters',
    lengthErrorMsg: 'Patronymic is too short - should be 3 chars minimum.',
  },
  [UserDataFieldEnum.birthDateField]: {
    name: 'birthDate',
    label: 'Birth date',
    requiredErrorMsg: 'Birth date is required',
  },
}
