import React, { ReactElement } from 'react'
import Head from 'next/head'

import { Login } from 'src/login'

const Home = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Registration Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}

export default Home
