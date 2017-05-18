import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import getStore from 'store';
import routes from 'routes';

const AppNavigator = StackNavigator(routes);

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

function mapNavToProps(store) {
  return store;
}

class AppWithoutNavigationState extends Component {
    render() {
      console.log(this.props);
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);

const App = () => (
  <Provider store={getStore(navReducer)}>
    <AppWithNavigationState />
  </Provider>
)

AppRegistry.registerComponent('Mall', () => App);
