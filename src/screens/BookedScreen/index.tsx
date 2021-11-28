import React, { FC, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '@/consts/data'

import { AppHeaderIcon } from '@/components/ui/AppHeaderIcon'

import { IPost } from '@/types'
import { AppPostsFlatList } from '@/components/ui/AppPostsFlatList'

export const BookedScreen: FC<any> = ({ navigation }) => {
  const goToCurrent = (post: IPost): void =>
    navigation.navigate('CurrentScreen', { postId: post.id, postDate: post.date })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title='drawer' iconName='ios-menu' onPress={() => null} />
        </HeaderButtons>
      )
    })
  }, [navigation])

  return <AppPostsFlatList data={DATA.filter((post) => post.booked)} onOpen={goToCurrent} />
}
