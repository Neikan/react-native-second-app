import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { Post } from '@/components/elements/Post'

import { IAppPostsFlatListProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16
  }
})

export const AppPostsFlatList: FC<IProps> = ({ data, onOpen }) => (
  <View style={styles.view}>
    <FlatList
      data={data}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
)
