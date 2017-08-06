import { applyMiddleware, createStore } from 'redux'
import reduxLogger from "redux-logger"

import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

// const logger = store => next => action => {
//   console.log('dispatching', action)
//   console.log('next state', store.getState())
//   next(action)
// }

const middleware = applyMiddleware(reduxThunk)
export default createStore(rootReducer,middleware)
