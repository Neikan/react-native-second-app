import React, { FC, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '@/consts/data'

import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'

import { IPost } from '@/types'
import { AppPostsFlatList } from '@/components/ui/AppPostsFlatList'

export const MainScreen: FC<any> = ({ navigation }) => {
  const goToCurrent = (post: IPost): void =>
    navigation.navigate('CurrentScreen', { postId: post.id, postDate: post.date })

  const goToNew = (): void => navigation.navigate('NewScreen')

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

  return <AppPostsFlatList data={DATA} onOpen={goToCurrent} />
}
