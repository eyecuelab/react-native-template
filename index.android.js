import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store';
import Splash from './src/containers/Splash/index';

console.log(configureStore);
const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Splash />
  </Provider>
)

AppRegistry.registerComponent('Mall', () => App);
