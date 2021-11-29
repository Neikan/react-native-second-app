import { Alert } from 'react-native'
import { Action, ActionCreator } from 'redux'
import * as FileSystem from 'expo-file-system'

import { DB } from '@/services/db'

import { IPost, IPostToDB } from '@/types'
import { IActionRemovePost, IActionToggleBooked, PostsActionTypes, PostsThunkAction, PostsThunkDispatch } from './types'

export const addPost: ActionCreator<PostsThunkAction> = (post: IPostToDB) => async (dispatch: PostsThunkDispatch) => {
  const fileName = post.img.split('/').pop()
  const systemPath = FileSystem.documentDirectory
  const newPath = systemPath && fileName ? `${systemPath}${fileName}` : ''

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img
    })

  } catch (error) {
    Alert.alert('Ошибка получения данных')
  }

  const id = await DB.createPost(post)
  
  const payload: IPost = {
    ...post,
    id: id,
    img: newPath
  }

  dispatch({
    payload,
    type: PostsActionTypes.ADD_POST
  })
}

export const loadPosts: ActionCreator<PostsThunkAction> = () => async (dispatch: PostsThunkDispatch) => {
  const posts = await DB.getPosts()

  dispatch({
    payload: posts,
    type: PostsActionTypes.LOAD_POSTS
  })
}

export const removePost: ActionCreator<Action> = (postId: string): IActionRemovePost => ({
  payload: postId,
  type: PostsActionTypes.REMOVE_POST
})

export const toggleBooked: ActionCreator<Action> = (postId: string): IActionToggleBooked => ({
  payload: postId,
  type: PostsActionTypes.TOGGLE_BOOKED
})
