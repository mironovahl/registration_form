enum PersonalInfoFieldEnum {
  firstNameField = 'firstName',
  lastNameField = 'lastName',
  patronymicField = 'patronymic',
  birthDateField = 'birthDate',
}

export const personalInfo = {
  [PersonalInfoFieldEnum.firstNameField]: {
    name: 'firstName',
    label: 'First name',
    requiredErrorMsg: 'First name is required',
    invalidErrorMsg: 'First name can contain only latin characters',
    lengthErrorMsg: 'First name is too short - should be 3 chars minimum.',
  },
  [PersonalInfoFieldEnum.lastNameField]: {
    name: 'lastName',
    label: 'Last name',
    requiredErrorMsg: 'Last name is required',
    invalidErrorMsg: 'Last name can contain only latin characters',
    lengthErrorMsg: 'Last name is too short - should be 3 chars minimum.',
  },
  [PersonalInfoFieldEnum.patronymicField]: {
    name: 'patronymic',
    label: 'Patronymic',
    requiredErrorMsg: 'Patronymic is required',
    invalidErrorMsg: 'Patronymic can contain only latin characters',
    lengthErrorMsg: 'Patronymic is too short - should be 3 chars minimum.',
  },
  [PersonalInfoFieldEnum.birthDateField]: {
    name: 'birthDate',
    label: 'Birth date',
    requiredErrorMsg: 'Birth date is required',
  },
}
