/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { Dial } from "./external/tone-webrtc-api/dial-api";
var WebRTC = require("react-native-webrtc");
var { RTCView, mediaDevices } = WebRTC;

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {

  state = {
    registered: false,
    selfViewSrc: "",
    incomingCall: false,
    onCall: false
  };

  registerAction = () => {
    console.log(`Registering...`);
    let dial = new Dial();

    this.setState(
      {
        dial: dial
      },
      () => {
        dial.authenticate('64446', JSON.stringify({}));
        this.addListeners();
      }
    );
  };

  addListeners = () => {
    console.log(`Adding listeners...`);
    this.notifier = this.state.dial.getNotifier();
    console.log(this.notifier);
    if (this.notifier) {
      this.notifier.addListener("ToneEvent", event => {
        // this.eventHandler(event);
        console.log(event);
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Register"
          onPress={this.registerAction}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
  }
));




const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

function logError(error) {
  console.log("logError", error);
}


type Props = {};
export class App extends Component<Props> {
  getUserMedia = () => {
    console.log("Get user media");

    let videoSourceId;

    // on android, you don't have to specify sourceId manually, just use facingMode
    // uncomment it if you want to specify
    let isFront = true;

    mediaDevices.getUserMedia(
      {
        audio: true,
        video: {
          mandatory: {
            minWidth: 640, // Provide your own width, height and frame rate here
            minHeight: 360,
            minFrameRate: 30
          },
          facingMode: isFront ? "user" : "environment",
          optional: videoSourceId ? [{ sourceId: videoSourceId }] : []
        }
      },
      stream => {
        console.log("getUserMedia success", stream);
        // container.setState({selfViewSrc: stream.toURL()});
        // container.setState({status: 'ready', info: 'Please enter or create room ID'});
      },
      logError
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          onPress={this.getUserMedia}
          title="Get user media"
          color="#C0C0C0"
        />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
