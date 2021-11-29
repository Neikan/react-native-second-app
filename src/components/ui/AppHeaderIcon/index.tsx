import React, { FC } from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import { Color } from '@/consts/themes'

export const AppHeaderIcon: FC<any> = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    color={Platform.OS === 'ios' ? Color.PRIMARY_700 : Color.LIGHT}
    iconSize={24}
  />
)
