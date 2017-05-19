import colors from 'lib/colors';

export default {
  default: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.secondary,
      borderWidth: 5,
      borderRadius: 20,
      padding: 5,
      width: 150, // should this value be made amenable to a variety of screen sizes?
    },
    text: {
      color: colors.secondary,
    },
  },
}
