import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import appColors from "../../colors";
import Button from "../Button";
export default function CardQuestion({onShowAnswer,quizText}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{quizText}</Text>
      </View>
      <Button
        text="Show Answer"
        onPress={onShowAnswer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  showAnswerButton: {
    backgroundColor: appColors.accentColor,
    color: appColors.whiteTextColor,
  },
  card: {
    backgroundColor: appColors.primaryColor,
    borderColor: appColors.darkPrimaryColor,
    borderRadius: 8,
    borderWidth: 2,
    shadowColor: appColors.lightPrimaryColor,
    minHeight: 100,
    width: 300,
    padding: 20,
    margin: 30,
    alignContent: "center",
  },
  cardText: {
    color: appColors.whiteTextColor,
    fontSize: 16,
  },
});
