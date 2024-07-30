import { all } from 'redux-saga/effects'
import fetchTodoSaga from './fetchTodoSaga';

function* rootSaga() {
  yield all([
    fetchTodoSaga(),
  ]);
}

export default rootSaga;