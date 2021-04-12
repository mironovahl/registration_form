import { createSelector } from '@reduxjs/toolkit'

import { initialState, State } from './slice'

export const selectUserData = (state: { userData: State }): State => {
  const { userData = initialState } = state

  return userData
}

export const selectPersonalInfo = createSelector(
  selectUserData,
  ({ email: _, ...userData }) => userData,
)

export const selectEmail = createSelector(
  selectUserData,
  userData => userData.email,
)
