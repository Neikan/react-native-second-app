import { createStore, combineReducers } from 'redux'

import { postsReducer } from '@/store/posts/reducer'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default createStore(rootReducer)
