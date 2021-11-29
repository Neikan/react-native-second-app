import React, { FC, useEffect, useLayoutEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'
import { AppPostsFlatList } from '@/components/ui/AppPostsFlatList'

import { loadPosts } from '@/store/posts/actions'

import { IPost } from '@/types'
import { IApplicationState } from '@/store/types'
import { Color } from '@/consts/themes'

export const MainScreen: FC<any> = ({ navigation }) => {
  const dispatch = useDispatch()
  const { allPosts, loading } = useSelector((state: IApplicationState) => state.posts)

  const goToCurrent = (post: IPost): void =>
    navigation.navigate('CurrentScreen', { postId: post.id, postDate: post.date })

  const goToNew = (): void => navigation.navigate('NewStackScreen')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='photo' iconName='ios-camera' onPress={goToNew} />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='drawer' iconName='ios-menu' onPress={navigation.toggleDrawer} />
        </HeaderButtons>
      )
    })
  }, [navigation])

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={Color.PRIMARY_600} />
      </View>
    )
  }

  return <AppPostsFlatList data={allPosts} onOpen={goToCurrent} />
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
