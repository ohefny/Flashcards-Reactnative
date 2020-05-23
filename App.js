import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {backgroundColor,primaryColor} from "./colors";
import CardQuiz from "./components/flashcard/CardQuestion"
import DeckPage from "./components/deck/DeckPage"

export default function App() {
  return (
    <View style={styles.container}>
      <DeckPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    color: primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
