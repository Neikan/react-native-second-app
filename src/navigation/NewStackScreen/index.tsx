import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { appNavigationStyles } from '../consts'

import { NewScreen } from '@/screens/NewScreen'

const NewStack = createNativeStackNavigator()

export const NewStackScreen: FC = () => (
  <NewStack.Navigator>
    <NewStack.Screen
      name='NewScreen'
      component={NewScreen}
      options={{
        title: 'Новый пост',
        animation: 'slide_from_left',
        ...appNavigationStyles
      }}
    />
  </NewStack.Navigator>
)
