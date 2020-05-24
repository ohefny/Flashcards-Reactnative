import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../../colors";
import { Container, Content, Textarea, Form, Item, Label, Input } from "native-base";
import Button from "../Button";

export default class CardCreationScreen extends Component {
  addCard = () => {
    //todo get text from this.state.quizText , this.state.answerText 
    //add card to deck in local storage

  };
  render() {
    return (
      <Container>
        <Content padder>
          <Form >
            <Input
              onChangeText={(text) => {
                this.setState({ quizText: text });
              }}
              rowSpan={6}
              bordered
              placeholder="Write your question..."
              style={{ marginBottom: 20 }}
            />
            <Textarea
              onChangeText={(text) => {
                this.setState({ answerText: text });
              }}
              rowSpan={6}
              bordered
              placeholder="Write your answer..."
              style={{ marginBottom: 20 }}
            />
            <Button text="Submit" />
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
