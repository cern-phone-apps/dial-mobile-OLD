import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions
} from "react-native";
import RegisterForm from "../../components/RegisterForm"; // Includes provider
import DisconnectForm from "../../components/DisconnectForm/DisconnectForm"; // Includes provider

var WebRTC = require("react-native-webrtc");
var { mediaDevices } = WebRTC;

var { height } = Dimensions.get("window");

var box_count = 3;
var box_height = height / box_count;

export class HomeScreen extends Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    connecting: PropTypes.bool.isRequired,
    disconnecting: PropTypes.bool.isRequired
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

  render() {
    const { connected } = this.props;

    return (
      <View style={styles.container}>
        {!connected ? (
          <RegisterForm style={[styles.box, styles.box2]} />
        ) : (



          <DisconnectForm style={[styles.box, styles.box2]} />
        )}

        {/*<View style={[styles.box, styles.box3]}>*/}
        {/*{connected &&*/}
        {/*!this.state.onCall &&*/}
        {/*!this.state.incomingCall ? (*/}
        {/*<Button onPress={this.callAction} title="Call" />*/}
        {/*) : (*/}
        {/*<View />*/}
        {/*)}*/}

        {/*{this.state.incomingCall ? (*/}
        {/*<Button onPress={this.answerAction} title="Answer" />*/}
        {/*) : (*/}
        {/*<View />*/}
        {/*)}*/}

        {/*{this.state.onCall ? (*/}
        {/*<Button onPress={this.hangUpAction} title="Hangup Call" />*/}
        {/*) : (*/}
        {/*<View />*/}
        {/*)}*/}
        {/*<Button*/}
        {/*title="Go to Details"*/}
        {/*onPress={() => this.props.navigation.navigate("Details")}*/}
        {/*/>*/}
        {/*</View>*/}

        <View style={[styles.box, styles.box1]}>
          <Text style={styles.welcome}>Welcome to Phone!</Text>
          <Button
            onPress={this.getUserMedia}
            title="Get user media"
            color="#C0C0C0"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
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
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: "#2196F3"
  },
  box2: {
    backgroundColor: "#8BC34A"
  },
  box3: {
    backgroundColor: "#e3aa1a"
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   box: {
//     height: box_height
//   },
//   box1: {
//     backgroundColor: '#2196F3'
//   },
//   box2: {
//     backgroundColor: '#8BC34A'
//   },
//   box3: {
//     backgroundColor: '#e3aa1a'
//   }
// });
