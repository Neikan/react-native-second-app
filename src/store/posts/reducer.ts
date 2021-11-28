import { IPostsState, PostsActionTypes, TPostsActions } from './types'

const initialState: IPostsState = {
  allPosts: [],
  bookedPosts: []
}

export const postsReducer = (state: IPostsState = initialState, action: TPostsActions): IPostsState => {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked)
      }

    default:
      return state
  }
}
