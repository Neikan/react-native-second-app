import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { IPost } from '@/types'
import { IApplicationState } from '../types'

export interface IPostsState {
  allPosts: IPost[]
  bookedPosts: IPost[]
  loading: boolean
}

export enum PostsActionTypes {
  ADD_POST = 'ADD_POST',
  LOAD_POSTS = 'LOAD_POSTS',
  REMOVE_POST = 'REMOVE_POST',
  TOGGLE_BOOKED = 'TOGGLE_BOOKED'
}

export interface IActionAddPost extends Action<string> {
  payload: IPost
  type: PostsActionTypes.ADD_POST
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

export type TPostsActions = IActionAddPost | IActionLoadPosts | IActionRemovePost | IActionToggleBooked

export type PostsThunkAction = ThunkAction<Promise<any> | any, IApplicationState, void, Action<string>>

export type PostsThunkDispatch = ThunkDispatch<IPostsState, void, Action<string>>
