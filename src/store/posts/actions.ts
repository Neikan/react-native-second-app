import { Alert } from 'react-native'
import { ActionCreator } from 'redux'
import * as FileSystem from 'expo-file-system'

import { DB } from '@/services/db'

import { IPost, IPostToDB } from '@/types'
import { PostsActionTypes, PostsThunkAction, PostsThunkDispatch } from './types'

export const addPost: ActionCreator<PostsThunkAction> = (post: IPostToDB) => async (dispatch: PostsThunkDispatch) => {
  const fileName = post.img.split('/').pop()
  const systemPath = FileSystem.cacheDirectory
  const newPath = systemPath && fileName ? `${systemPath}ImagePicker/${fileName}` : ''

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img
    })

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
  } catch (error) {
    Alert.alert('Ошибка создания поста')
  }
}

export const loadPosts: ActionCreator<PostsThunkAction> = () => async (dispatch: PostsThunkDispatch) => {
  try {
    const posts = await DB.getPosts()

    dispatch({
      payload: posts,
      type: PostsActionTypes.LOAD_POSTS
    })
  } catch (error) {
    Alert.alert('Ошибка получения данных')
  }
}

export const removePost: ActionCreator<PostsThunkAction> = (postId: string) => async (dispatch: PostsThunkDispatch) => {
  try {
    await DB.removePost(postId)

    dispatch({
      payload: postId,
      type: PostsActionTypes.REMOVE_POST
    })
  } catch (error) {
    Alert.alert('Ошибка удаления поста')
  }
}

export const toggleBooked: ActionCreator<PostsThunkAction> = (post: IPost) => async (dispatch: PostsThunkDispatch) => {
  try {
    await DB.updatePost(post)

    dispatch({
      payload: post.id,
      type: PostsActionTypes.TOGGLE_BOOKED
    })
  } catch (error) {
    Alert.alert('Ошибка изменения поста')
  }
}
