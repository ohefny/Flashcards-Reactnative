import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";
import Button from "../Button";

export default class DeckScreen extends Component {
/*   static navigationOptions = ({ navigation }) => ({
    results: `${navigation.state.params.user.results}`,
  }); */
  onQuizStarPressed = () => {
    this.props.navigation.navigate('Deck Practice',{id:this.props.route.params.id})
  };
  onAddCardPressed = () => {
    this.props.navigation.navigate('Card Creation',{id:this.props.route.params.id})
  };
  state = {};
  render() {
    //todo show if Last Result number of Practices > 0
    const deckInfo = {
      creationDate: "20/2/2020",
      cardsNumber: 3,
      lastResult: this.props.route.params.results,
      numberOfPractices: 2,
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
    creationDate,
    cardsNumber,
    lastResult,
    numberOfPractices,
  } = props.deckInfo;
  return (
    <View style={styles.deckInfoContainer}>
      <Text style={styles.titleStyle}>Deck Name</Text>
      <View>
        <Text style={styles.detailsStyle}>Created At: {creationDate}</Text>
        <Text style={styles.detailsStyle}>Contained Cards: {cardsNumber}</Text>
        <Text style={styles.detailsStyle}>
          Number of Practices: {numberOfPractices}
        </Text>
        {numberOfPractices > 0 ? (
          <Text style={styles.detailsStyle}>Last Result: {lastResult}%</Text>
        ) : null}
      </View>
      <View style={{ flexDirection: "row", alignContent: "space-around" }}>
        <Button
          text="Add Card"
          onPress={props.onAddCardPressed}
          btnStyle={{ margin: 5, backgroundColor: appColors.primaryColor }}
        />
        <Button
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
