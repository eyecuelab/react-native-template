import { fork } from 'redux-saga/effects';

import watchFetchTitle from 'sagas/fetch-title';


export default function* root() {
  yield [
    fork(watchFetchTitle),
  ];
}
