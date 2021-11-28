import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { DATA } from '@/consts/data'

import { Post } from '@/components/elements/Post'

import { IPost } from '@/types'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16
  }
})

export const Main: FC<any> = ({ navigation }) => {
  const goToCurrent = (post: IPost): void => navigation.navigate('Current', { postId: post.id, postDate: post.date })

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
