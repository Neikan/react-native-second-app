import { Platform } from 'react-native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { Color } from '@/consts/themes'

export const appNavigationStyles: NativeStackNavigationOptions =
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
