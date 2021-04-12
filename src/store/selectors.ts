import { createSelector } from '@reduxjs/toolkit'

import { initialState, State } from './slice'

const selectUserDataSlice = (state: { userData: State }): State => {
  const { userData = initialState } = state

  return userData
}

export const selectPersonalInfo = createSelector(
  selectUserDataSlice,
  ({ email: _, ...userData }) => userData,
)

export const selectEmail = createSelector(
  selectUserDataSlice,
  userData => userData.email,
)
