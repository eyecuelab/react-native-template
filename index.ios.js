import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import store from './src/store';
import Splash from './src/containers/Splash/index';

const App = () => (
  <Provider store={store}>
    <Splash />
  </Provider>
)

AppRegistry.registerComponent('Mall', () => App);
