import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {backgroundColor,primaryColor} from "./colors";
import CardQuiz from "./components/flashcard/CardQuiz"
import CardAnswer from "./components/flashcard/CardAnswer"

export default function App() {
  return (
    <View style={styles.container}>
      <CardQuiz quizText="Also, your function does not work as the challenge wants, because you ... answer which is a blank string, so your function will always return th"/>
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
