import { fork, all } from 'redux-saga/effects';

import watchFetchTitle from 'sagas/fetch-title';


export default function* rootSaga() {
  yield all([
    fork(watchFetchTitle),
  ]);
}
