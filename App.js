import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./store";

import AuthScreen from "./containers/AuthScreen";
import WelcomeScreen from "./containers/WelcomeScreen";
import EventsScreen from "./containers/Events";
import TicketsScreen from "./containers/Tickets";
import SellScreen from "./containers/Sell";
import GoneScreen from "./containers/Gone";
import ProfileScreen from "./containers/Profile";

console.disableYellowBox = true;

const MainNavigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Auth: { screen: AuthScreen },
  Main: TabNavigator({
    Events: { screen: EventsScreen },
    Tickets: { screen: TicketsScreen },
    Sell: { screen: SellScreen },
    Gone: { screen: GoneScreen },
    Profile: { screen: ProfileScreen }
  })
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

// APP ID: 201895470415022
