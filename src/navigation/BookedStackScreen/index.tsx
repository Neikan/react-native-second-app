import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { appNavigationStyles } from '../consts'

import { BookedScreen } from '@/screens/BookedScreen'
import { CurrentScreen } from '@/screens/CurrentScreen'

const BookedStack = createNativeStackNavigator()

export const BookedStackScreen: FC = () => (
  <BookedStack.Navigator>
    <BookedStack.Screen
      name='BookedScreen'
      component={BookedScreen}
      options={{
        title: 'Избранное',
        animation: 'slide_from_left',
        ...appNavigationStyles
      }}
    />
    <BookedStack.Screen
      name='CurrentScreen'
      component={CurrentScreen}
      options={{
        title: 'Пост',
        animation: 'slide_from_right',
        ...appNavigationStyles
      }}
    />
  </BookedStack.Navigator>
)
