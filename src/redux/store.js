import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import labelReducer from './modules/label'
import userReducer from './modules/user'

const rootReducer =  combineReducers({
  labelReducer,
  userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  )
  
)

export default store
