import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import sagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist-immutable';
import createActionBuffer from 'redux-action-buffer'
import {REHYDRATE} from 'redux-persist/constants'

import reducer from 'reducers/index';
import sagas from 'sagas/index';

const loggerMiddleware = createLogger({
  // options...
});

let middlewares = [];

if (__DEV__ === true) {
  middlewares.push(loggerMiddleware);
  middlewares.push(sagaMiddleware(sagas));
}
middlewares.push( createActionBuffer(REHYDRATE) );

let enhancer = compose(
  autoRehydrate(),
  applyMiddleware(...middlewares),
);

const store = createStore(
    reducer,
    {},
    enhancer,
);

persistStore(store, {
  storage: AsyncStorage,
  //  blacklist: ['nav'], // to not persist nav state information
});

export default store;
