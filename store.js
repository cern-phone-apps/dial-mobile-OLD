import { applyMiddleware, createStore, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBlacklistFilter } from "redux-persist-transform-filter";

import rootReducer from "./reducers";
import apiMiddleware from "./middleware";

const createCustomStore = () => {
  // We don't want to persist the connection status
  const blacklistFilter = createBlacklistFilter("calls", [
    "connection",
    "search",
    "call",
    "dialpad",
  ]);

  const blacklistLoginFilter = createBlacklistFilter("auth", [
    "loginInProgress",
    "error",
    // "loggedIn",
    // "token"
  ]);

  const persistConfig = {
    key: "phone-webapp",
    storage: storage,
    blacklist: ["sidebar"],
    transforms: [blacklistFilter, blacklistLoginFilter]
  };

  const persistedReducers = persistReducer(persistConfig, rootReducer);

  return createStore(
    persistedReducers,
    {},
    compose(
      applyMiddleware(apiMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};

export default () => {
  let store = createCustomStore();
  let persistor = persistStore(store);
  return { store, persistor };
};
