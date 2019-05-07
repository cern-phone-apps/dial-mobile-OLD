import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { logMessage } from "../../../common/utils/logging";

export class AuthLoadingScreen extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    token: PropTypes.string
  };

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const {loggedIn, navigation} = this.props;
    logMessage(`loggedIn???`);
    logMessage(loggedIn);
    // const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(loggedIn ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
