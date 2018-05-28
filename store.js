import {applyMiddleware, createStore, compose} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createBlacklistFilter} from 'redux-persist-transform-filter'

import rootReducer from 'reducers'
import apiMiddleware from './middleware'

const createCustomStore = () => {
  // We don't want to persist the connection status
  const blacklistFilter = createBlacklistFilter(
    'calls',
    ['connection']
  )

  const persistConfig = {
    key: 'phone-webapp',
    storage: storage,
    blacklist: [],
    transforms: [blacklistFilter]
  }

  const persistedReducers = persistReducer(
    persistConfig,
    rootReducer
  )

  const store = createStore(
    persistedReducers, {},
    compose(
      applyMiddleware(
        apiMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  return store
}

export default () => {
  let store = createCustomStore()
  let persistor = persistStore(store)
  return {store, persistor}
}
