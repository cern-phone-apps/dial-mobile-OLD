import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, View } from "react-native";
import { DisconnectedScreen } from "../DisconnectedScreen/DisconnectedScreen";
import ConnectedScreenContainer from "../ConnectedScreen/ConnectedScreenContainer";

export class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    connected: PropTypes.bool,
    connecting: PropTypes.bool,
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

  render() {
    const { connected } = this.props;

    return (
      <View style={styles.container}>
        {!connected ? (
          //Disconnected Screen
          <DisconnectedScreen />
        ) : (
          //Connected Screen
          <ConnectedScreenContainer />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10
  }
});