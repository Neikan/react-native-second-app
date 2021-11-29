import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { Button, Keyboard, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { Color } from '@/consts/themes'

import { PhotoPicker } from '@/components/elements/PhotoPicker'
import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'

import { addPost } from '@/store/posts/actions'

import { IPost } from '@/types'

export const NewScreen: FC<any> = ({ navigation }) => {
  const [text, setText] = useState('')
  const imgRef = useRef<string>()

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='drawer' iconName='ios-menu' onPress={navigation.toggleDrawer} />
        </HeaderButtons>
      )
    })
  }, [navigation])

  const handleAddPost = (): void => {
    const newPost: IPost = {
      id: '',
      img: imgRef.current ?? '',
      text,
      date: new Date().toJSON(),
      booked: false
    }

    dispatch(addPost(newPost))
    setText('')
    navigation.navigate('MainScreen')
  }

  const handlePickPhoto = (uri: string): void => {
    imgRef.current = uri
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.view}>
          <TextInput
            autoCorrect={false}
            autoFocus
            multiline
            onChangeText={setText}
            placeholder='Введите текст заметки...'
            selectionColor={Color.PRIMARY_500}
            style={styles.textarea}
            value={text}
          />
          <PhotoPicker onPick={handlePickPhoto} />
          <Button color={Color.PRIMARY_600} onPress={handleAddPost} title='Создать пост' disabled={!text} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16
  },
  text: {},
  textarea: {
    paddingVertical: 16
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 16
  }
})
