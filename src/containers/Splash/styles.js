import { StyleSheet } from 'react-native';

import colors from 'lib/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  cardWrapper: {
    margin: 15,
  },
});


const dynamicStyles = {
  getTitle: color => (
    {
      color: colors[color],
      fontSize: 25,
    }
  ),
};

export { styles, dynamicStyles };
