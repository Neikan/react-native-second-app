import React, { FC, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    marginBottom: 16
  },
  version: {
    fontWeight: 'bold'
  }
})

export const AboutScreen: FC<any> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='drawer' iconName='ios-menu' onPress={navigation.toggleDrawer} />
        </HeaderButtons>
      )
    })
  }, [navigation])

  return (
    <View style={styles.view}>
      <Text style={styles.description}>Приложение для ведения личного блога</Text>
      <Text>Версия: <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  )
}
