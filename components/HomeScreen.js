import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import appColors from "../colors";
import Button from "./Button";
import DeckList from "./deck/DeckList";
import DialogInput from "react-native-dialog-input";
import { handleInitialData } from "../redux/actions/shared";
import { getSnippetDecksArray } from "../utils";
class HomeScreen extends Component {
  state = {
    initialDataRequested: false,
    showDeckCreationDialog: false,
  };
  componentDidMount() {
    if (this.props.loading && !this.state.initialDataRequested) {
      handleInitialData(this.props.dispatch);
      this.setState({ initialDataRequested: true });
    }
  }
  navigateToDeckDetails = (id) => {
    this.props.navigation.navigate("Deck Details", { results: 77, id });
  };
  onAddDeck = (text) => {
    //todo add this text as deck to stoarage
    //then show loading
    //then add to state and dismiss dialog
    this.setState({ showDeckCreationDialog: false });
  };
  renderLoading() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: appColors.accentColor, fontSize: 30 }}>
          Loading...
        </Text>
      </View>
    );
  }
  renderEmptyView() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
        <Text style={{ color: appColors.primaryTextColor,alignSelf:"center", fontSize: 25 }}>
          You didn't create any decks!
        </Text>
      </View>
    );
  }
  render() {
    console.log("props", this.props);
    if (this.props.loading) return this.renderLoading();
    return (
      <View style={styles.container}>
        {this.props.snippets.length == 0 ? (
          this.renderEmptyView()
        ) : (
          <DeckList
            data={this.getData()}
            onDeckPressed={this.navigateToDeckDetails}
          />
        )}
        <Button
          text="Add Deck"
          onPress={() => this.setState({ showDeckCreationDialog: true })}
        />
        {this.renderDialog()}
      </View>
    );
  }
  renderDialog() {
    return (
      <DialogInput
        isDialogVisible={this.state.showDeckCreationDialog}
        title={"Add Deck"}
        message={"Name your new deck"}
        hintInput={"Deck name..."}
        submitInput={(inputText) => {
          this.onAddDeck(inputText);
        }}
        closeDialog={() => {
          this.setState({ showDeckCreationDialog: false });
        }}
      />
    );
  }
  getData() {
    return [
      { id: 1, title: "Deck 1", cards: [{}, {}] },
      { id: 2, title: "Deck 2", cards: [{}, {}] },
      { id: 3, title: "Deck 3", cards: [{}, {}] },
      { id: 4, title: "Deck 4", cards: [{}, {}] },
      { id: 5, title: "Deck 5", cards: [{}, {}] },
      { id: 6, title: "Deck 6", cards: [{}, {}] },
      { id: 7, title: "Deck 7", cards: [{}, {}] },
      { id: 8, title: "Deck 8", cards: [{}, {}] },
      { id: 9, title: "Deck 9", cards: [{}, {}] },
      { id: 10, title: "Deck 10", cards: [{}, {}] },
      { id: 11, title: "Deck 11", cards: [{}, {}] },
      { id: 12, title: "Deck 12", cards: [{}, {}] },
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
function mapStateToProps(state) {
  const { decks, loading } = state;
  console.log(state);
  return { snippets: getSnippetDecksArray(decks), loading };
}

export default connect(mapStateToProps)(HomeScreen);
