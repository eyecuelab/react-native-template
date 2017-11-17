import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';



export default (CardFace) => {
  return class Card extends Component {
    state = {
      flipped: true,
    }

    flipCard = () => {
      this.setState({ flipped: !this.state.flipped })
    }

    render() {
      return (
        <TouchableOpacity
          style={styles.card}
          onPress={this.flipCard}
        >
          {this.state.flipped
            ? <Image
                style={{ flex: 1, alignSelf: 'stretch' }}
                resizeMode={Image.cover}
                source={{ uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10572379.jpg'}}
              />
            : <CardFace {...this.props} />
          }
        </TouchableOpacity>
      )
    }
  }
}

const cardAspectRatio = 16 / 9;
const cardWidth = 50;

const styles = {
  card: {
    height: cardWidth * cardAspectRatio,
    width: cardWidth,
    borderWidth: 3,
  },
}
