import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import asyncFuctionMiddleware from "./reducers/middlewares/asyncFuctionMiddleware";

const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composEnhancers(applyMiddleware(asyncFuctionMiddleware)));

export default store;