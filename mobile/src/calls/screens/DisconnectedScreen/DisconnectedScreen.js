import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export class DisconnectedScreen extends Component<{}> {
  render () {
    return <View>
      <Text style={styles.welcome}>CERN Phone Mobile</Text>
      <Text style={styles.subheader}>disconnected</Text>
      <RegisterForm style={[styles.box2]}/>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  subheader: {
    fontSize: 15,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
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