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

var WebRTC = require("react-native-webrtc");
var { RTCView, mediaDevices } = WebRTC;

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
export default class App extends Component<Props> {
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
