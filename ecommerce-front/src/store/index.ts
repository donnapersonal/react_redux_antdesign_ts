// import { createStore } from "redux";
// 官方不建议继续使用 createStore，而是使用下面的方法
import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import createRootReducer from "./reducers";
import { createHashHistory } from "history";
// 监听路由状态，一旦路由发生变化，就会 dispatch 一个 action
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(
    routerMiddleware(history),
    sagaMiddleware
  ),
  // 直接使用内置的 DevTools 支持
  devTools: process.env.NODE_ENV !== "production"
} as ConfigureStoreOptions);

sagaMiddleware.run(rootSaga);

export default store;
