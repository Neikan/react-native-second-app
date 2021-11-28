import { IPostsState, PostsActionTypes, TPostsActions } from './types'

const initialState: IPostsState = {
  allPosts: [],
  bookedPosts: []
}

export const postsReducer = (state: IPostsState = initialState, action: TPostsActions): IPostsState => {
  switch (action.type) {
    case PostsActionTypes.ADD_POST:
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts]
      }

    case PostsActionTypes.LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked)
      }

    case PostsActionTypes.REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter((post) => post.id !== action.payload)
      }

    case PostsActionTypes.TOGGLE_BOOKED: {
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.booked = !post.booked
        }

        return post
      })

      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post) => post.booked)
      }
    }

    default:
      return state
  }
}
