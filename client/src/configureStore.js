import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger)
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))
}

export default configureStore