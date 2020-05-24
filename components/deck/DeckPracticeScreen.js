import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";
import Button from "../Button";
import CardQuestion from "../flashcard/CardQuestion";
import CardAnswer from "../flashcard/CardAnswer";
import { connect } from "react-redux";
import { getCardsOfDeck } from "../../utils";
import QuizResultScreen from "../QuizResultScreen";

const SHOWING_QUIZ = 1;
const SHOWING_ANSWER = 2;
const SHOWING_RESULT = 3;
class DeckPracticeScreen extends Component {
  resetState=()=>{
    this.setState({
      deckState: SHOWING_QUIZ,
      correct: 0,
      incorrect: 0,
      cardIndex: 0,
    })
  }
  onMoveToNextCard = (isCorrect) => {
    const correct = isCorrect ? 1 : 0;
    const incorrect = !isCorrect ? 1 : 0;
    const newState = {
      deckState:
        this.state.cardIndex !== this.props.cards.length - 1
          ? SHOWING_QUIZ
          : SHOWING_RESULT,
      correct: this.state.correct + correct,
      incorrect: this.state.incorrect + incorrect,
      cardIndex: this.state.cardIndex + 1,
    };
    this.setState(newState);
  };
  onShowAnswerPressed = () => {
    //todo load answer from storage
    this.setState({ deckState: SHOWING_ANSWER });
  };
  state = {
    deckState: SHOWING_QUIZ,
    correct: 0,
    incorrect: 0,
    cardIndex: 0,
  };
  render() {
    console.log("state", this.state);
    //todo show if Last Result number of Practices > 0
    return <View style={styles.container}>{this.renderQuizState()}</View>;
  }
  renderQuizState = () => {
    //todo navigate to QuizResultScreen after finishing
    if (this.state.deckState == SHOWING_QUIZ) {
      return (
        <CardQuestion
          quizText={this.props.cards[this.state.cardIndex].question}
          onShowAnswer={this.onShowAnswerPressed}
        />
      );
    } else if (this.state.deckState == SHOWING_ANSWER) {
      return (
        <CardAnswer
          answerText={this.props.cards[this.state.cardIndex].answer}
          onCorrectPressed={() => this.onMoveToNextCard(true)}
          onInCorrectPressed={() => this.onMoveToNextCard(false)}
        />
      );
    } else
      return (
        <QuizResultScreen
          correctAnswersCount={this.state.correct}
          incorrectAnswersCount={this.state.incorrect}
          onRetakePressed={()=>this.resetState()}
        />
      );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
function mapStateToProps({ decks, cards }, { route }) {
  return {
    deck: decks[route.params.id],
    cards: getCardsOfDeck(route.params.id, cards),
  };
}
export default connect(mapStateToProps)(DeckPracticeScreen);
