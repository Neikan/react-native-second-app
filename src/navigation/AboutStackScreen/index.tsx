import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { appNavigationStyles } from '../consts'

import { AboutScreen } from '@/screens/AboutScreen'

const AboutStack = createNativeStackNavigator()

export const AboutStackScreen: FC = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name='AboutScreen'
      component={AboutScreen}
      options={{
        title: 'О приложении',
        animation: 'slide_from_left',
        ...appNavigationStyles
      }}
    />
  </AboutStack.Navigator>
)
