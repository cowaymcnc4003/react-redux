import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'

//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    //saga
    return [...defaultMiddleware, sagaMiddleware];
  },
});
//saga
sagaMiddleware.run(rootSaga);

export default store;