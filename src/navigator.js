import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import Splash from 'containers/Splash';
import routesNames from 'lib/constants/routes';

const routes = {
  [routesNames.Splash]: {
    screen: Splash,
    navigationOptions: {
      header: null,
    },
  },
};

const AppNavigator = StackNavigator(routes);

class AppWithoutNavigationState extends Component {
  render() {
      return (
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })}
        />
      );
  }
}

function mapNavToProps(store) {
  return store;
}

const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default { AppWithNavigationState, navReducer};
