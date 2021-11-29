import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppTab } from '@/navigation/AppTab'
import { NewStackScreen } from '@/navigation/NewStackScreen'
import { AboutStackScreen } from '@/navigation/AboutStackScreen'
import { Color } from '@/consts/themes'

const Drawer = createDrawerNavigator()

export const AppDrawer: FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerActiveTintColor: Color.PRIMARY_600,
      drawerActiveBackgroundColor: Color.PRIMARY_200,
      drawerInactiveTintColor: Color.GRAY_600
    }}
  >
    <Drawer.Screen name='AppTab' component={AppTab} options={{ drawerLabel: 'Главная' }} />
    <Drawer.Screen name='NewStackScreen' component={NewStackScreen} options={{ drawerLabel: 'Новый пост' }} />
    <Drawer.Screen name='AboutStackScreen' component={AboutStackScreen} options={{ drawerLabel: 'О приложении' }} />
  </Drawer.Navigator>
)
