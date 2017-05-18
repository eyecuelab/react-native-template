import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { FETCH_TITLE } from 'lib/constants/actions';
import Api from 'lib/api';
import setTitle from 'actions/set-title';
import { genericError } from 'actions/errors';

const executeFetchTitle = () => {
  // let root = 'https://jsonplaceholder.typicode.com';
  // let data = Api.get(root + '/posts/1').then(()=>{
  //   console.log('hi');
  // })
  // setTimeout(()=>{
  //   console.log(data);
  // }, 1000);

  return 'fetched title'; // TODO make this actually API call
}

function* fetchTitle(action) {
  try {
    const title = yield call(executeFetchTitle);
    yield put(setTitle(title));
  } catch (error) {
    yield put(genericError('Failed to Fetch Title'));
  }
}

export default function* watchFetchTitle() {
  yield takeLatest(FETCH_TITLE, fetchTitle);
}
