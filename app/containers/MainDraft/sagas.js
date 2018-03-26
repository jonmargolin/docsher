import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REQUEST_DATA  } from './constants';
import { request_Data_succeeded, request_Data_Failed  } from './actions';
export function* defaultSaga() {
  return;
}

export function fetchDataFromServer() {
  return fetch('http://localhost:3000/api/Data')
    .then(response => response.json());
}

function* fetchData() {
  try {
    const data = yield call(fetchDataFromServer);
    yield put(request_Data_succeeded(data));
  } catch (e) {
    yield put(request_Data_Failed(e.message));
  }
}

// Individual exports for testing
export function* fetchDataSaga() {
  yield* takeLatest(REQUEST_DATA, fetchData);
}
// All sagas to be loaded
export default [
  fetchDataSaga,
];
