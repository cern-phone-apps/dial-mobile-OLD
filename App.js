/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, TextInput } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { Dial } from "./external/tone-webrtc-api/dial-api";
var WebRTC = require("react-native-webrtc");
var { RTCView, mediaDevices } = WebRTC;

function logError(error) {
  console.log("logError", error);
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(
        json =>
          console.log(json) || console.log(`There is internet connectivity`)
      );
  };

  getUserMedia = () => {
    console.log(`Getting user media...`);

    let videoSourceId;

    // on android, you don't have to specify sourceId manually, just use facingMode
    // uncomment it if you want to specify
    let isFront = true;

    mediaDevices
      .getUserMedia({
        audio: true,
        video: false
      })
      .then(stream => {
        // Got stream!
        console.log("Got stream");
        console.log(stream);
      })
      .catch(error => {
        console.error(error);
      });
  };

  registerAction = () => {
    console.log(`Registering...`);
    let dial = new Dial();

    this.setState(
      {
        dial: dial
      },
      () => {
        dial.authenticate("64446", JSON.stringify({}));
        this.addListeners();
      }
    );
  };

  disconnectAction = () => {
    console.log(`Disconnecting...`);
    this.state.dial.stopAgent();
    this.setState({ registered: false });
  };

  callAction = () => {
    console.log(`Calling...`);
    this.state.dial.call("64440");
  };

  answerAction = () => {
    console.log(`Calling...`);
    this.state.dial.answer();
  };

  hangUpAction = () => {
    console.log(`Calling...`);
    this.state.dial.hangUp();
  };

  eventHandler = event => {
    console.log(`Tone Event received: ${event.name}`);
    console.log(event);

    switch (event.name) {
      case "registered":
        this.setState({ registered: true });
        break;
      case "inviteReceived":
        this.setState({ incomingCall: true });
        break;
      case "inviteAccepted":
        this.setState({ incomingCall: false });
        this.setState({ onCall: true });
        break;

      case "bye":
        this.setState({ incomingCall: false });
        this.setState({ onCall: false });
        break;

      case "accepted":
        this.setState({ incomingCall: false });
        this.setState({ onCall: true });
        break;
    }
  };

  addListeners = () => {
    console.log(`Adding listeners...`);
    this.notifier = this.state.dial.getNotifier();
    console.log(this.notifier);
    if (this.notifier) {
      this.notifier.addListener("ToneEvent", event => {
        this.eventHandler(event);
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* other code from before here */}
        <Text style={styles.welcome}>Welcome to Phone!</Text>
        <Button
          onPress={this.getUserMedia}
          title="Get user media"
          color="#C0C0C0"
        />
        {!this.state.registered ? (
          <View style={styles.box}>
            <Text>Register your number:</Text>
            <TextInput
              style={{
                height: 40,
                width: "100%",
                borderColor: "gray",
                borderWidth: 1
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              keyboardType={"number-pad"}
            />

            <Button
              onPress={this.registerAction}
              title="Register"
              color="#008000"
            />
          </View>
        ) : (
          <View style={styles.box}>
            <Button
              onPress={this.disconnectAction}
              title="Disconnect"
              color={"#FF0000"}
            />
          </View>
        )}

        {this.state.registered &&
        !this.state.onCall &&
        !this.state.incomingCall ? (
          <Button onPress={this.callAction} title="Call" />
        ) : (
          <View />
        )}

        {this.state.incomingCall ? (
          <Button onPress={this.answerAction} title="Answer" />
        ) : (
          <View />
        )}

        {this.state.onCall ? (
          <Button onPress={this.hangUpAction} title="Hangup Call" />
        ) : (
          <View />
        )}
        <RTCView streamURL={this.state.selfViewSrc} />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
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
  Home: HomeScreen,
  Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Settings: SettingsStack
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);

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
