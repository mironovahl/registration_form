import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
)

export default MyApp
