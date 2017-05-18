import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { FETCH_TITLE } from 'lib/constants/actions';
import Api from 'lib/api';
import setTitle from 'actions/set-title';
import { genericError } from 'actions/errors';

const executeFetchTitle = () => {
  let root = 'https://jsonplaceholder.typicode.com';
  let params = '/posts/1';
  return Api.get(root + params).then(val => {
    // console.log(val);
    return val.title.slice(0, 8);
  });
}

function* fetchTitle(action) {
  try {
    const title = yield call(executeFetchTitle);
    yield put(setTitle(title));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to Fetch Title'));
  }
}

export default function* watchFetchTitle() {
  yield takeLatest(FETCH_TITLE, fetchTitle);
}
