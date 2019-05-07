import { View } from "react-native";
import React from "react";
import HangupForm from "../HangupForm/HangupForm";
import { Text } from "react-native-elements";

export class OnCallInfo extends React.Component {

  render() {
    // this.props.phoneService.testFunction();
    return (
      <View>
        <Text>You are on a call</Text>
        <HangupForm/>
      </View>
    );
  }
}

export default OnCallInfo;