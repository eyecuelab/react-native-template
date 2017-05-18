import React from 'react'
import { StyleSheet } from 'react-native'
import colors from 'lib/colors'

const styles = {
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getTitle: (_color) => {
    return {
      color: colors[_color],
      fontSize: 25,
    }
  },
};

export default styles;
