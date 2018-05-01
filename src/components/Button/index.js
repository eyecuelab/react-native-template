import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export class Button extends Component {
  state = {
    specialColor: '',
  }

  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      console.log('whaaaat?!! my text cahnged?!!!');
      this.setState({ specialColor: 'red' })
    }
  }

  render() {
    const style = styles[this.props.type];
    const { specialColor, sefcondProp } = this.state; //sefconfProp === undefinded
    const array1 = [1,2,3]
    const array2 = [3,4,8]
    const array3 = [...array1, ...array2, 13, 14, 'string']
    // const specialColor = this.state.specialColor;
    return (
      <TouchableOpacity
        onPress={this.props.onPressHEY}
        style={[
          style.container,
          specialColor ? { backgroundColor: specialColor } : null
        ]}
        onLayout={({ nativeEvent }) => {
          console.log(nativeEvent.height);
        }}
      >
        <Text style={style.text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
};

Button.defaultProps = {
  type: 'standard',
  onPress: () => {}, //function() { console.log(this)}
  text: '',
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Button;
