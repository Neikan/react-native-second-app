import { Action } from 'redux'

import { IPost } from '@/types'

export interface IPostsState {
  allPosts: IPost[]
  bookedPosts: IPost[]
}

export enum PostsActionTypes {
  LOAD_POSTS = 'LOAD_POSTS',
  REMOVE_POST = 'REMOVE_POST',
  TOGGLE_BOOKED = 'TOGGLE_BOOKED'
}

export interface IActionLoadPosts extends Action<string> {
  payload: IPost[]
  type: PostsActionTypes.LOAD_POSTS
}

export interface IActionRemovePost extends Action<string> {
  payload: string
  type: PostsActionTypes.REMOVE_POST
}

export interface IActionToggleBooked extends Action<string> {
  payload: string
  type: PostsActionTypes.TOGGLE_BOOKED
}

export type TPostsActions = IActionLoadPosts | IActionRemovePost | IActionToggleBooked
