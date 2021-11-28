import React, { FC } from 'react'
import { Text, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { Main as MainView } from '@/views/Main'
import { Current as CurrentView } from '@/views/Current'
import { Color } from '@/consts/themes'

const Stack = createNativeStackNavigator()

const styles: NativeStackNavigationOptions =
  Platform.OS === 'ios'
    ? {
        headerStyle: {
          backgroundColor: Color.LIGHT
        },
        headerTintColor: Color.PRIMARY_600
      }
    : {
        headerStyle: {
          backgroundColor: Color.PRIMARY_600
        },
        headerTintColor: Color.LIGHT
      }

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={MainView}
          options={{
            title: 'Мой блог',
            animation: 'slide_from_left',
            ...styles
          }}
        />
        <Stack.Screen
          name='Current'
          component={CurrentView}
          options={{
            title: 'Пост',
            animation: 'slide_from_right',
            ...styles
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
