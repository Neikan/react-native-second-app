import { Action } from 'redux'

import { IPost } from '@/types'

export interface IPostsState {
  allPosts: IPost[]
  bookedPosts: IPost[]
}

export enum PostsActionTypes {
  LOAD_POSTS = 'LOAD_POSTS'
}

export interface IActionLoadPosts extends Action<string> {
  payload: IPost[]
  type: PostsActionTypes.LOAD_POSTS
}

export type TPostsActions = IActionLoadPosts
