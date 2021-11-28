import React, { FC, useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { Color } from '@/consts/themes'

export const Current: FC<any> = ({ navigation, route }) => {
  const goToMain = (): void => navigation.navigate('Main')

  useLayoutEffect(() => {
    const { params } = route

    const date = new Date(params.postDate).toLocaleDateString()

    navigation.setOptions({ headerTitle: 'Пост ' + String(params.postId) + ' от ' + date })
  }, [navigation, route])

  return (
    <View style={styles.view}>
      <Text>{route.params.postId}</Text>
      <Button title='Go to Main' onPress={goToMain} color={Color.PRIMARY_600} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
