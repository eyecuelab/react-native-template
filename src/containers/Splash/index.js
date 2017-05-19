import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Map } from 'immutable';


import ActionCreators from 'actions/index'
import positionerStyle from 'lib/styles/positioner'
import styles from 'containers/Splash/styles'
import Button from 'components/Button/index'

class Splash extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.getTitle('white')}>{this.props.title}</Text>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <Button
            text={'Fetch Remote Title'}
            type={'default'}
            onPress={()=>{
              this.props.fetchTitle();
            }}
          />
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
