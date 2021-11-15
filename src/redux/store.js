// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import phonebookReducer from "./phonebook-reducer";
// import storage from "redux-persist/lib/storage";
// import { getDefaultNormalizer } from "@testing-library/dom";

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("wewe", action);

//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blackList: ["filter"],
// };

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(persistConfig, phonebookReducer),
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);
