import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import asyncFuctionMiddleware from "./reducers/middlewares/asyncFuctionMiddleware";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composEnhancers(applyMiddleware(asyncFuctionMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;