import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../colors";
import Button from "./Button";
import DeckList from "./deck/DeckList";
import DialogInput from "react-native-dialog-input";
export default class HomeScreen extends Component {
  state={
    showDeckCreationDialog:false
  } 
  onAddDeck = (text) => {
    //todo add this text as deck to stoarage
    //then show loading
    //then add to state and dismiss dialog
    this.setState({ showDeckCreationDialog: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <DeckList data={this.getData()} />
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
  };
 getData(){
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