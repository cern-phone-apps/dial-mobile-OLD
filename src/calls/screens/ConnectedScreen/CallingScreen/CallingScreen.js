import React, { Component } from "react";
import { Text, View } from "react-native";
import HangupForm from "../../../components/HangupForm/HangupForm";

export class CallingScreen extends Component<{}> {
  render () {
    return <View>
      <Text>Calling...</Text>
      <HangupForm/>
    </View>;
  }
}