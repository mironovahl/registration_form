import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
  firstName: '',
  lastName: '',
  patronymic: '',
  birthDate: '',
  email: '',
}

export type State = typeof initialState

export type AddPersonalPayload = Omit<State, 'email'>

export type AddEmailPayload = Pick<State, 'email'>

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addPersonalInfo: (state, action: PayloadAction<AddPersonalPayload>) => {
      return { ...state, ...action.payload }
    },
    addEmail: (state, action: PayloadAction<AddEmailPayload>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { addEmail, addPersonalInfo } = userDataSlice.actions
