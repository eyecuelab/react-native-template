import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import getStore from './src/store';
import navigator from './src/navigator';

const { navReducer, AppWithNavigationState } = navigator;

const App = () => (
  <Provider store={getStore(navReducer)}>
    <AppWithNavigationState/>
  </Provider>
)

AppRegistry.registerComponent('ReactNativeTemplate', () => App);
