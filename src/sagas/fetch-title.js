import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FETCH_TITLE } from 'constants/actions';
import setTitle from 'actions/set-title';

const executeFetchTitle = () => {
  setTimeout(()=>{
    return 'fetched title'; // TODO make this actually API call
  }, 500);
}

function* fetchTitle() {
  try {
    const title = yield call(executeFetchTitle);
    yield put(setTitle(title));
  } catch (error) {
    // opportunity for error handling function
  }
}

export default function* watchFetchTitle() {
  yield* takeLatest(FETCH_TITLE, fetchTitle);
}
