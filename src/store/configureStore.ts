import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { postsReducer } from '@/store/posts/reducer'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
