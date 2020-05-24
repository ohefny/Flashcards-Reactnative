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
export default function CardAnswer({ onCorrectPressed, onInCorrectPressed, answerText }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{answerText}</Text>
      </View>
      <Button style={styles.actionButton}
        text="Correct"
        onPress={onCorrectPressed}
        textStyle={{color:appColors.whiteTextColor}}
        btnStyle={{backgroundColor:appColors.correctColor,...styles.actionButton}}
      />
      <Button style={styles.actionButton}
        text="InCorrect"
        onPress={onInCorrectPressed}
        textStyle={{color:appColors.whiteTextColor}}
        btnStyle={{backgroundColor:appColors.incorrectColor,...styles.actionButton}}
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
  actionButton: {
    margin: 10,
    width: 200
  },
  card: {
    backgroundColor: appColors.whiteTextColor,
    borderColor: appColors.darkPrimaryColor,
    borderRadius: 8,
    borderWidth: 2,
    minHeight: 100,
    width:300,
    padding: 20,
    margin: 30,
    alignContent: "center",
  },
  cardText: {
    color: appColors.text,
    fontSize: 16,
  },
});
