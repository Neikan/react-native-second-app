import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppTab } from '@/navigation/AppTab'
import { NewScreen } from '@/screens/NewScreen'
import { AboutScreen } from '@/screens/AboutScreen'

const Drawer = createDrawerNavigator()

export const AppDrawer: FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Drawer.Screen name='AppTab' component={AppTab} />
    <Drawer.Screen name='NewScreen' component={NewScreen} />
    <Drawer.Screen name='About' component={AboutScreen} />
  </Drawer.Navigator>
)
