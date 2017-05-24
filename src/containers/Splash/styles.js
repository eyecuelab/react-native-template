import { StyleSheet } from 'react-native';

import colors from 'lib/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const dynamicStyles = {
  getTitle: (_color) => (
    {
      color: colors[_color],
      fontSize: 25,
    }
  ),
};

export { styles, dynamicStyles };
