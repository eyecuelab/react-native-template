export default {
  centeringFromBottom: function(bottom){
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
