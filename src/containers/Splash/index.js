import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Map } from 'immutable';


import ActionCreators from 'actions/index'

import styles from 'containers/Splash/styles'

class Splash extends Component {
  constructor(props){
    super(props);
    props.setTitle('dynamically set title');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.getTitle('white')}>{this.props.title}</Text>
      </View>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return {title: store.title.get('title')};
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
