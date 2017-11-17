import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
    <View
      style={[styles.container, { backgroundColor: props.color }]}
    />
  );
};

const cardAspectRatio = 16 / 9;
const cardWidth = 45;

const styles = {
  container: {
    height: cardWidth * cardAspectRatio,
    width: cardWidth,
  },
}

export default Card;
