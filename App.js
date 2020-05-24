import React, { Component } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import appColors from "./colors";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DeckScreen from "./components/deck/DeckScreen";
import DeckPracticeScreen from "./components/deck/DeckPracticeScreen";
import CardCreationScreen from "./components/flashcard/CardCreationScreen";
import HomeScreen from "./components/HomeScreen";
import QuizResultScreen from "./components/QuizResultScreen";
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: appColors.primaryColor
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
const Stack = createStackNavigator();
export default class App extends Component {
  state = {
    showDeckCreationDialog: false,
  };

  render() {
    //if decks are empty show empty message
    return (
      <NavigationContainer>
     
        <AppStack />
      </NavigationContainer>
    );
  }
}
function AppStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: appColors.primaryColor,
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deck Details" component={DeckScreen} />
      <Stack.Screen name="Deck Practice" component={DeckPracticeScreen} />
      <Stack.Screen name="Quiz Result" component={QuizResultScreen} />
      <Stack.Screen name="Card Creation" component={CardCreationScreen} />
    </Stack.Navigator>
  );
}

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
