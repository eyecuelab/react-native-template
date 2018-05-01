import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import getStore from 'store';
import navigator from 'navigator';
import ActionCreators from 'actions/index';

import Splash from 'containers/Splash';

const { navReducer, AppWithNavigationState } = navigator;

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', (isConnected) => {
      this.props.store.dispatch(ActionCreators.setConnectivity(isConnected));
    });
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Splash />
      </Provider>
    );
  }
}

App.defaultProps = {
  store: getStore(navReducer),
};
