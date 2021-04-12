import React, { ReactElement, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from 'src/store'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
