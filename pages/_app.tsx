import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from 'src/store'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
