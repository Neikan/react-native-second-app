import React, { FC, useLayoutEffect } from 'react'
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { DATA } from '@/consts/data'
import { Color } from '@/consts/themes'

export const Current: FC<any> = ({ navigation, route }) => {
  const { params } = route

  const post = DATA.find((item) => item.id === params.postId)

  const handleRemovePost = (): void => {
    Alert.alert(
      'Удаление поста',
      'Вы уверены, что хотите удалить пост?',
      [
        {
          text: 'Подтвердить',
          onPress: () => {}
        },
        {
          text: 'Отмена',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
  }

  useLayoutEffect(() => {
    const date = new Date(params.postDate).toLocaleDateString()

    navigation.setOptions({ headerTitle: 'Пост ' + String(params.postId) + ' от ' + date })
  }, [navigation, route])

  return (
    <ScrollView style={styles.view}>
      <View>
        <Image style={styles.image} source={{ uri: post?.img }} />
        <View style={styles.textView}>
          <Text style={styles.text}>{post?.text}</Text>
        </View>
      </View>
      <Button title='Удалить' onPress={handleRemovePost} color={Color.DANGER_500} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 16
  },
  textView: {
    alignItems: 'center'
  },
  text: {
    padding: 16
  },
  image: {
    height: 200,
    width: '100%'
  }
})
