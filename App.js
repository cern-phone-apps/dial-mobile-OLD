/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreenContainer from "./src/calls/screens/Home/HomeContainer";

var WebRTC = require("react-native-webrtc");
var { mediaDevices } = WebRTC;


class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreenContainer,
  Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

const RecentStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

const ContactsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Call: HomeStack,
      Recent: RecentStack,
      Contacts: ContactsStack,
      Settings: SettingsStack
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);

