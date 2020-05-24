import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";
import Button from "../Button";
import { connect } from "react-redux";
import { getCardsOfDeck } from "../../utils";
class DeckScreen extends Component {
  /*   static navigationOptions = ({ navigation }) => ({
    results: `${navigation.state.params.user.results}`,
  }); */
  onQuizStarPressed = () => {
    this.props.navigation.navigate("Deck Practice", {
      id: this.props.deck.id,
    });
  };
  onAddCardPressed = () => {
    this.props.navigation.navigate("Card Creation", {
      id: this.props.deck.id,
    });
  };
  state = {};
  render() {
    //todo show if Last Result number of Practices > 0
    const deckInfo = {
      title:this.props.deck.title,
      creationDate: this.props.deck.creationDate,
      cardsNumber: this.props.cards.length,
      /* lastResult: this.props.deck.id,
      numberOfPractices: 2, */
    };
    return (
      <DeckDetails
        onQuizStartPressed={this.onQuizStarPressed}
        onAddCardPressed={this.onAddCardPressed}
        deckInfo={deckInfo}
      />
    );
  }
}
function DeckDetails(props) {
  const {
    title,
    creationDate,
    cardsNumber,
    lastResult,
    numberOfPractices,
  } = props.deckInfo;
  return (
    <View style={styles.deckInfoContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View>
        <Text style={styles.detailsStyle}>Created At: {creationDate}</Text>
        <Text style={styles.detailsStyle}>Contained Cards: {cardsNumber}</Text>
        {/* <Text style={styles.detailsStyle}>
          Number of Practices: {numberOfPractices}
        </Text>
        {numberOfPractices > 0 ? (
          <Text style={styles.detailsStyle}>Last Result: {lastResult}%</Text>
        ) : null} */}
      </View>
      <View style={{ flexDirection: "row", alignContent: "space-around" }}>
        <Button
          text="Add Card"
          onPress={props.onAddCardPressed}
          btnStyle={{ margin: 5, backgroundColor: appColors.primaryColor }}
        />
        <Button
          disabled = {cardsNumber===0}
          text="Start Practice"
          onPress={props.onQuizStartPressed}
          btnStyle={{ margin: 5 }}
        />
      </View>
    </View>
  );
} //todo make it stateless and connect it
const styles = StyleSheet.create({
  deckInfoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 32,
  },
  detailsStyle: {
    fontSize: 16,
  },
});
//todo connect this component to redux
function mapStateToProps({ decks, cards }, { route }) {
  return {
    deck: decks[route.params.id],
    cards: getCardsOfDeck(route.params.id, cards),
  };
}

export default connect(mapStateToProps)(DeckScreen);
