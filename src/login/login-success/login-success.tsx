import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import { format } from 'date-fns'

import { selectUserData } from 'src/store'

export const LoginSuccess = (): ReactElement => {
  const userData = useSelector(selectUserData)

  return (
    <Box textAlign={'center'} my={2}>
      <Typography variant="h6">Registration successful</Typography>
      <Box my={1}>
        <Typography>
          {userData.lastName} {userData.firstName} {userData.patronymic}
        </Typography>

        <Typography>
          Birth Date: {format(new Date(userData.birthDate), 'MM/dd/yyyy')}
        </Typography>

        <Typography>email: {userData.email}</Typography>
      </Box>
    </Box>
  )
}
