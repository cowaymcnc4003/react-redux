import { takeLeading, delay, put } from 'redux-saga/effects';
import { resetBoard, resetBoardSagaRequested, resetBoardSagaSucceede, resetBoardSagaFail } from '../slices/boardSlice';
import { resetTodo } from '../slices/todoSlice';

function* resetBoardSaga() {
  try {
    yield delay(3000);
    yield put(resetBoard());
    yield put(resetTodo());

    yield put(resetBoardSagaSucceede());
  } catch (error) {
    yield put(resetBoardSagaFail(error));
  }
}

export function* saga() {
  yield takeLeading(resetBoardSagaRequested, resetBoardSaga);
}