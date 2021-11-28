import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { navIcons } from '@/consts/navItems'
import { Color } from '@/consts/themes'

import { BookedStackScreen } from '@/navigation/BookedStackScreen'
import { MainStackScreen } from '@/navigation/MainStackScreen'

// Необходимо разобраться по какой причине использование createMaterialBottomTabNavigator приводит к ошибкам
// const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
const Tab = createBottomTabNavigator()

export const AppNavigation: FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.PRIMARY_600,
        tabBarInactiveTintColor: Color.GRAY_500,
        headerShown: false
      }}
    >
      <Tab.Screen
        name='MainStackScreen'
        component={MainStackScreen}
        options={{
          title: 'Все',
          tabBarIcon: ({ color }) => <Ionicons name={navIcons.MainStackScreen} size={24} color={color} />
        }}
      />
      <Tab.Screen
        name='BookedStackScreen'
        component={BookedStackScreen}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({ color }) => <Ionicons name={navIcons.BookedStackScreen} size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)
