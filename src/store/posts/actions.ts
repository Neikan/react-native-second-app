import { Action, ActionCreator } from 'redux'

import { DATA } from '@/consts/data'

import { IActionLoadPosts, IActionRemovePost, IActionToggleBooked, PostsActionTypes } from './types'

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
