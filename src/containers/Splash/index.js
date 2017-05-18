import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Map } from 'immutable';


import ActionCreators from 'actions/index'

import styles from 'containers/Splash/styles'
import buttonStyle from 'styles/button'
import positionerStyle from 'styles/positioner'

class Splash extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.getTitle('white')}>{this.props.title}</Text>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <TouchableOpacity
            onPress={()=>{
              this.props.fetchTitle();
            }}
            style={buttonStyle.default.container}
          >
            <Text
              style={buttonStyle.default.text}
            >
              Fetch New Title
            </Text>
          </TouchableOpacity>
        </View>
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
