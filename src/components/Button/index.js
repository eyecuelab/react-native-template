import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from 'components/Button/styles'

export default class Button extends Component {
  render(){
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles[this.props.type].container}
      >
        <Text
          style={styles[this.props.type].text}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
