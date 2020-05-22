import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class DeckCreation extends React {
  render() {
    return (
      <View style={styles.container}>
        <Text>DeckCreation</Text>
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
