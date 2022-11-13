import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import reducer from "./reducers";
import chatMiddleware from "../containers/ChatContainer/chatMiddleware";

import { configureStore } from "@reduxjs/toolkit";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatMiddleware),
});
//const store = createStore(reducers, persistedState, enhancer);

/* store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
}); */

export default store;
