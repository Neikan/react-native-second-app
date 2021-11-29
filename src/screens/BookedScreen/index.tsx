import React, { FC, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'

import { IPost } from '@/types'
import { AppPostsFlatList } from '@/components/ui/AppPostsFlatList'
import { useSelector } from 'react-redux'
import { IApplicationState } from '@/store/types'

export const BookedScreen: FC<any> = ({ navigation }) => {
  const { bookedPosts } = useSelector((state: IApplicationState) => state.posts)

  const goToCurrent = (post: IPost): void =>
    navigation.navigate('CurrentScreen', { postId: post.id, postDate: post.date })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='drawer' iconName='ios-menu' onPress={navigation.toggleDrawer} />
        </HeaderButtons>
      )
    })
  }, [navigation])

  return <AppPostsFlatList data={bookedPosts} onOpen={goToCurrent} />
}
