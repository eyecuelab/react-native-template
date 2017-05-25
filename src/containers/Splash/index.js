import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import PropTypes from 'prop-types';


import ActionCreators from 'actions/index';
import getTitle from 'selectors/title';
import positionerStyle from 'lib/styles/positioner';
import { staticStyles, dynamicStyles } from 'containers/Splash/styles';
import Button from 'components/Button/index';

export class Splash extends Component {
  render() {
    return (
      <View style={staticStyles.container}>
        <Text style={dynamicStyles.getTitle('white')}>{this.props.title}</Text>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <Button
            text={'Fetch Remote Title'}
            type={'standard'}
            onPress={() => {
              this.props.fetchTitle();
            }}
          />
        </View>
      </View>
    );
  }
}

Splash.defaultProps = {
  fetchTitle: () => {},
  title: '',
};

Splash.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return { title: getTitle(state) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
