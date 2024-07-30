import rootReducer from "./reducers/index";
// import { createStore, applyMiddleware, compose } from "redux";
// redux toolkit 변경
import { configureStore } from "@reduxjs/toolkit";
// import asyncFuctionMiddleware from "./reducers/middlewares/asyncFuctionMiddleware";
// import thunk from 'redux-thunk';
// import { thunk as thunkMiddleware } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

// redux toolkit 변경
// const store = createStore(
//   rootReducer,
//   composEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
// );
// redux toolkit 변경
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defailtMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [],
      }
    });
    return [...defailtMiddleware, sagaMiddleware];
  }
})

sagaMiddleware.run(rootSaga);
export default store;