import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
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
}

let sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let enhancer = compose(
  applyMiddleware(...middlewares),
);

const store = createStore(
    reducer,
    {}, // initial state
    enhancer,
);

sagaMiddleware.run(sagas)


export default store;
