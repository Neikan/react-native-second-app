import React, { FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { Post } from '@/components/elements/Post'

import { IAppPostsFlatListProps as IProps } from './types'
import { Color } from '@/consts/themes'

export const AppPostsFlatList: FC<IProps> = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>Постов пока нет</Text>
      </View>
    )
  }

  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  emptyText: {
    color: Color.PRIMARY_600
  }
})
