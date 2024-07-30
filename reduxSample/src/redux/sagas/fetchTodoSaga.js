import { put, delay, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import {
  fetchTodosRequested,
  fetchTodosSucceeded,
  fetchTodosFailed,
} from '../actions/fetchTodosAction';

function* fetchTodos() {
  try {
    const data = yield delay(
      3000,
      // [
      //   '서버로부터 받아온 할일 1',
      //   '서버로부터 받아온 할일 2',
      //   '서버로부터 받아온 할일 3',
      // ]
      [`서버로부터 받아온 할 일  ${new Date().toLocaleTimeString()}`]
    );

    yield put(fetchTodosSucceeded(data));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

function* fetchTodoSaga() {
  // 모두
  // yield takeEvery(fetchTodosRequested, fetchTodos);
  // 마지막 것만
  // yield takeLatest(fetchTodosRequested, fetchTodos);
  // 먼저 된거만
  yield takeLeading(fetchTodosRequested, fetchTodos);
}

export default fetchTodoSaga;