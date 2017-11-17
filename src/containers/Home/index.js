import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from 'actions/index';
import getTitle from 'selectors/title';
import positionerStyle from 'lib/styles/positioner';
import generateRandomColor from 'lib/helpers/generateRandomColor';
import shuffleArray from 'lib/helpers/shuffleArray';

import Button from 'components/Button';
import ColorCard from 'components/ColorCard';
import makeCard from 'hoc/makeCard';

import { styles, dynamicStyles } from './styles';

export class Splash extends Component {
  constructor(props) {
    super(props);
    this._cardsCount = 16;
    const cards = this.generateCards();
    this.state = {
      cards,
    }
  }

  generateCardsWithNewCount = () => {
    const margin = 8;
    this._cardsCount = 16 + ((Math.floor(Math.random() * margin)) - (margin / 2));
    // we directly manipulate class property without having to worry about forcing repaint as we would w/ state change
    if (this._cardsCount % 2 !== 0) this._cardsCount += 1;
    // no need for state change until new card generation anyways
    const cards = this.generateCards();
    this.setState({ cards });
  }

  generateCards() {
    const cards = [];
    for (let i = 0; i < (this._cardsCount / 2); i++) {
      const newColor = generateRandomColor();
      cards.push(newColor, newColor);
    }
    return shuffleArray(cards);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          text={'Generate Random # of Cards'}
          type={'standard'}
          onPress={this.generateCardsWithNewCount}
        />
        <View style={styles.cardsContainer}>
          {this.state.cards.map((cardColor, index) => {
            return (
              <View
                key={`${cardColor} + ${index}`}
                style={styles.cardWrapper}
              >
                <ColorCard color={cardColor} />
              </View>
            )
          })}
        </View>
      </View>
    );
  }
}

Splash.defaultProps = {
  fetchTitle: () => {},
  title: '',
};

Splash.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { title: getTitle(store) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);


// <Text style={dynamicStyles.getTitle('white')}>{this.props.title}</Text>
// <View style={positionerStyle.centeringFromBottom('20%')}>
//   <Button
//     text={'Fetch Remote Title'}
//     type={'standard'}
//     onPress={() => {
//       this.props.fetchTitle();
//     }}
//   />
// </View>
