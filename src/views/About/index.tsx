import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const About: FC = () => {
  return (
    <View style={styles.view}>
      <Text>About</Text>
    </View>
  )
}
