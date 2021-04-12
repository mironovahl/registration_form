import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { State } from 'src/store/slice'

export const LoginSuccess = (): ReactElement => {
  const state = useSelector((state: State) => state)

  return (
    <div>
      <p>You are beautiful</p>
    </div>
  )
}
