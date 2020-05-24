import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import appColors from "../../colors";
import Button from "../Button";
export default function DeckDetails(props) {
  const {
    title,
    creationDate,
    cardsNumber,
    lastResult,
    numberOfPractices,
  } = props.deckInfo;
  return (
    <View style={styles.deckInfoContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View>
        <Text style={styles.detailsStyle}>Created At: {creationDate}</Text>
        <Text style={styles.detailsStyle}>Contained Cards: {cardsNumber}</Text>
        {/* <Text style={styles.detailsStyle}>
            Number of Practices: {numberOfPractices}
          </Text>
          {numberOfPractices > 0 ? (
            <Text style={styles.detailsStyle}>Last Result: {lastResult}%</Text>
          ) : null} */}
      </View>
      <View style={{ flexDirection: "row", alignContent: "space-around" }}>
        <Button
          text="Add Card"
          onPress={props.onAddCardPressed}
          btnStyle={{ margin: 5, backgroundColor: appColors.primaryColor }}
        />
        <Button
          disabled={cardsNumber === 0}
          text="Start Practice"
          onPress={props.onQuizStartPressed}
          btnStyle={{ margin: 5 }}
        />
      </View>
    </View>
  );
} //todo make it stateless and connect it
const styles = StyleSheet.create({
  deckInfoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 32,
  },
  detailsStyle: {
    fontSize: 16,
  },
});
