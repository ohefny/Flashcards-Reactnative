import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import appColors from "../../colors";
import DeckSnippet from "../deck/DeckSnippet";
import Button from "../Button";

export default class DeckList extends Component {

  keyExtractor = (item, index) => item.id;
  onPressItem = (id) => {
    //todo navigate to DeckPage
  };
  renderItem = ({ item }) => (
    <DeckSnippet
      id={item.id}
      title={item.title}
      cardsCount={item.cards.length} //todo find all cards in that deck
      onPressItem={this.onPressItem}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Text>DeckList</Text>
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    margin: 20,
  },
});
