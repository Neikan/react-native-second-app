import React, { FC, useCallback, useLayoutEffect } from 'react'
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Color } from '@/consts/themes'

import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'
import { useDispatch, useSelector } from 'react-redux'
import { removePost, toggleBooked } from '@/store/posts/actions'
import { IApplicationState } from '@/store/types'

export const CurrentScreen: FC<any> = ({ navigation, route }) => {
  const { allPosts, bookedPosts } = useSelector((state: IApplicationState) => state.posts)
  const { params } = route

  const dispatch = useDispatch()

  const post = allPosts.find((item) => item.id === params.postId)
  const booked = bookedPosts.some((item) => item.id === params.postId)

  useLayoutEffect(() => {
    const date = new Date(params.postDate).toLocaleDateString()

    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    navigation.setOptions({
      headerTitle: 'Пост от ' + date,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='photo' iconName={iconName} onPress={handleToggleBooked} />
        </HeaderButtons>
      )
    })
  }, [navigation, route, booked])

  const handleToggleBooked = useCallback(() => dispatch(toggleBooked(post?.id)), [dispatch, post])

  const handleRemovePost = (): void => {
    Alert.alert(
      'Удаление поста',
      'Вы уверены, что хотите удалить пост?',
      [
        {
          text: 'Подтвердить',
          onPress: () => {
            dispatch(removePost(post?.id))
            navigation.goBack()
          }
        },
        {
          text: 'Отмена',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
  }

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
