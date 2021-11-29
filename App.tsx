import React, { FC, useState } from 'react'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'

import store from '@/store/configureStore'

import { loadAppAssets } from '@/services/loadAppAssets'

import { AppNavigation } from '@/navigation/AppNavigation'

const App: FC = () => {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAppAssets}
        onFinish={() => setIsReady(true)}
        onError={() => null}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
