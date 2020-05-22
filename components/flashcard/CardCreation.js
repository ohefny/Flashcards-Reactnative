import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CardCreation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Card Creation</Text>
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
