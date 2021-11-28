import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { navIcons } from '@/consts/navItems'
import { Color } from '@/consts/themes'

import { BookedStackScreen } from '@/navigation/BookedStackScreen'
import { MainStackScreen } from '@/navigation/MainStackScreen'

const Tab = createBottomTabNavigator()

export const AppNavigation: FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => <Ionicons name={navIcons[route.name]} size={24} color={color} />,
        tabBarActiveTintColor: Color.PRIMARY_600,
        tabBarInactiveTintColor: Color.GRAY_500,
        headerShown: false
      })}
    >
      <Tab.Screen name='MainStackScreen' component={MainStackScreen} options={{ title: 'Мой блог' }} />
      <Tab.Screen name='BookedStackScreen' component={BookedStackScreen} options={{ title: 'Избранное' }} />
    </Tab.Navigator>
  </NavigationContainer>
)
