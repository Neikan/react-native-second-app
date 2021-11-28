import { Action, ActionCreator } from 'redux'

import { DATA } from '@/consts/data'

import { IActionLoadPosts, IActionToggleBooked, PostsActionTypes } from './types'

export const loadPosts: ActionCreator<Action> = (): IActionLoadPosts => ({
  payload: DATA,
  type: PostsActionTypes.LOAD_POSTS
})

export const toggleBooked: ActionCreator<Action> = (postId: string): IActionToggleBooked => ({
  payload: postId,
  type: PostsActionTypes.TOGGLE_BOOKED
})
