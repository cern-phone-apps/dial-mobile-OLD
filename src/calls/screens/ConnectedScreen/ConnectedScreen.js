import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import MakeCallForm from "../../components/MakeCallForm/MakeCallForm";
import DisconnectForm from "../../components/DisconnectForm/DisconnectForm";
import { CallingScreen } from "./CallingScreen/CallingScreen";
import { OnCallScreen } from "./OnCallScreen/OnCallScreen";


export class ConnectedScreen extends Component {
  static propTypes = {
    onCall: PropTypes.bool.isRequired,
    calling: PropTypes.bool.isRequired
  };

  render() {
    const { onCall, calling } = this.props;

    if (calling) {
      return (
        <CallingScreen/>
      );
    }

    if (onCall) {
      return <OnCallScreen/>;
    }

    return (
      <View>
        <Text style={styles2.welcome}>CERN Phone Mobile</Text>
        <Text style={styles2.subheader}>connected</Text>
        <MakeCallForm />
      </View>
    );
  }
}

export default ConnectedScreen

const styles2 = StyleSheet.create({
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
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  }
});
