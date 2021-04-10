import React from 'react'
import Head from 'next/head'
import { LoginForm } from 'src/login'

const Home = () => {
  return (
    <>
      <Head>
        <title>Registration Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </>
  )
}

export default Home
