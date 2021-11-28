import { Action, ActionCreator } from 'redux'

import { DATA } from '@/consts/data'

import { IPost } from '@/types'
import { IActionAddPost, IActionLoadPosts, IActionRemovePost, IActionToggleBooked, PostsActionTypes } from './types'

export const addPost: ActionCreator<Action> = (post: IPost): IActionAddPost => ({
  payload: {
    ...post,
    id: Date.now().toString()
  },
  type: PostsActionTypes.ADD_POST
})

export const loadPosts: ActionCreator<Action> = (): IActionLoadPosts => ({
  payload: DATA,
  type: PostsActionTypes.LOAD_POSTS
})

export const removePost: ActionCreator<Action> = (postId: string): IActionRemovePost => ({
  payload: postId,
  type: PostsActionTypes.REMOVE_POST
})

export const toggleBooked: ActionCreator<Action> = (postId: string): IActionToggleBooked => ({
  payload: postId,
  type: PostsActionTypes.TOGGLE_BOOKED
})
