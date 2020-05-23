import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";
import Button from "../Button";
import CardQuestion from "../flashcard/CardQuestion";
import CardAnswer from "../flashcard/CardAnswer";
const SHOWING_QUIZ = 1;
const SHOWING_ANSWER = 2;

export default class DeckPage extends Component {
  onQuizStarPressed = () => {};
  onAddCardPressed = () => {};
  state = {
    deckState: SHOWING_DETAILS,
    currentQuestionIndex: 0,
  };
  render() {
    //todo show if Last Result number of Practices > 0
    return <View style={styles.container}>{this.renderQuizState()}</View>;
  }
  renderQuizState = () => {
    if (this.state.deckState == SHOWING_QUIZ) {
      return <CardQuestion quizText="ssssssss" />;
    } else {
      return <CardAnswer answerText="sssss" />;
    }
  };
}