import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ThemeReducers from './theme'

export default initialState => {
  const reducers = combineReducers({
    ThemeReducers
  })

  return createStore(reducers, initialState, applyMiddleware(thunk))
}
