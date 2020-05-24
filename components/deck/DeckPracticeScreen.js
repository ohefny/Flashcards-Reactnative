import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";
import Button from "../Button";
import CardQuestion from "../flashcard/CardQuestion";
import CardAnswer from "../flashcard/CardAnswer";
const SHOWING_QUIZ = 1;
const SHOWING_ANSWER = 2; 

export default class DeckPracticeScreen extends Component {
  onCorrectPressed = () => {
    //todo add result to stats on storage / load next quiz from storage
    this.setState({
      deckState: SHOWING_QUIZ,
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    });
  };
  onInCorrectPressed = () => {
    //todo add result to stats on storage / load next quiz from storage
    this.setState({
      deckState: SHOWING_QUIZ,
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    });
  };
  onShowAnswerPressed = () => {
    //todo load answer from storage
    this.setState({ deckState: SHOWING_ANSWER });
  };
  state = {
    deckState: SHOWING_QUIZ,
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
