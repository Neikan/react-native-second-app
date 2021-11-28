import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const New: FC = () => {
  return (
    <View style={styles.view}>
      <Text>New</Text>
    </View>
  )
}
