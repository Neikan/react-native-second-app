import React, { FC } from 'react'
import {
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Color } from '@/consts/themes'

import { IPostProps as IProps } from './types'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  post: {
    flex: 1,
    marginBottom: 16
  },
  image: {
    height: 200,
    width: '100%'
  },
  textView: {
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center'
  },
  text: {
    color: Color.LIGHT
  }
})

export const Post: FC<IProps> = ({ post, onOpen }) => {
  const { img, date } = post

  const postContent = (
    <View style={styles.post}>
      <ImageBackground style={styles.image} source={{ uri: img }}>
        <View style={styles.textView}>
          <Text style={styles.text}>{new Date(date).toLocaleDateString()}</Text>
        </View>
      </ImageBackground>
    </View>
  )

  return (
    <>
      {Platform.OS === 'android' ? (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(Color.PRIMARY_500, true)}
          onPress={() => onOpen(post)}
          useForeground={true}
        >
          {postContent}
        </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
          {postContent}
        </TouchableOpacity>
      )}
    </>
  )
}
