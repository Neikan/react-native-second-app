import React, { FC, useLayoutEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '@/consts/data'

import { Post } from '@/components/elements/Post'
import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'

import { IPost } from '@/types'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16
  }
})

export const Main: FC<any> = ({ navigation }) => {
  const goToCurrent = (post: IPost): void => navigation.navigate('Current', { postId: post.id, postDate: post.date })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='photo' iconName='ios-camera' onPress={() => null} />
        </HeaderButtons>
      )
    })
  }, [navigation])

  return (
    <View style={styles.view}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={goToCurrent} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
