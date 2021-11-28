import { Action, ActionCreator } from 'redux'

import { DATA } from '@/consts/data'

import { IActionLoadPosts, PostsActionTypes } from './types'

export const loadPosts: ActionCreator<Action> = (): IActionLoadPosts => ({
  payload: DATA,
  type: PostsActionTypes.LOAD_POSTS
})
