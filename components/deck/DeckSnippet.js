import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";

export default class DeckSnippet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DeckSnippet</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
