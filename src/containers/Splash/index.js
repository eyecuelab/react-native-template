import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import ActionCreators from 'actions/index';
import getTitle from 'selectors/title';
import positionerStyle from 'lib/styles/positioner';
import Button from 'components/Button/index';
import styles from './styles'

export class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecondButton: true,
      buttonText: 'Fetch Remote Title',
    }
    // this.button
    console.log('hi i am constructing');
  }

  componentDidMount() {
    console.log('hey i mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('something has updated!', prevState, this.state);
  }



  onButtonPress = () => {
    // this.setState({ showSecondButton: false, buttonText: 'i have been pressed' });
  }

  render() {
    console.log('rendering');
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <Button
            text={this.state.buttonText}
            type={'standar' + 'd'}
            onPressHEY={this.onButtonPress}
          />

          {this.state.showSecondButton ? <Button2 /> : null}
        </View>
      </View>
    );
  }
}


const Button2 = (props) => {
  return (
    <Text>I am button 2</Text>
  )
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

function mapStateToProps(store) {
  return { title: getTitle(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
