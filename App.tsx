import React, { FC, useState } from 'react'
import AppLoading from 'expo-app-loading'

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

  return <AppNavigation />
}

export default App
