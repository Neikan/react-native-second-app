import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppDrawer } from '@/navigation/AppDrawer'

export const AppNavigation: FC = () => (
  <NavigationContainer>
    <AppDrawer />
  </NavigationContainer>
)
