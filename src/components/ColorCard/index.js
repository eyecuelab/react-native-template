import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import makeCard from 'hoc/makeCard';

const ColorDisplay = (props) => {
  return (
    <View
      style={[styles.container, { backgroundColor: props.color }]}
    />
  );
};
const styles = {
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
}

// @makeCard
// export default ColorDisplay;

export default makeCard(ColorDisplay)
