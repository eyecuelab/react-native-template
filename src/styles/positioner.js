export default {
  centeringFromBottom: function(bottom){
    if (!bottom) {
      bottom = 0;
    }
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom,
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
}
