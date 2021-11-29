import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { appNavigationStyles } from '../consts'

import { MainScreen } from '@/screens/MainScreen'
import { CurrentScreen } from '@/screens/CurrentScreen'

const MainStack = createNativeStackNavigator()

export const MainStackScreen: FC = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name='MainScreen'
      component={MainScreen}
      options={{
        title: 'Мой блог',
        animation: 'slide_from_left',
        ...appNavigationStyles
      }}
    />
    <MainStack.Screen
      name='CurrentScreen'
      component={CurrentScreen}
      options={{
        title: 'Пост',
        animation: 'slide_from_right',
        ...appNavigationStyles
      }}
    />
  </MainStack.Navigator>
)
