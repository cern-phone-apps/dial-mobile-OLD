import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, StatusBar, View } from "react-native";

export class UnRegisterLoadingScreen extends React.Component {
  static propTypes = {
    connected: PropTypes.bool
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount = () => {
    this._bootstrapAsync();
  };

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const { connected, navigation } = this.props;
    // const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if (!connected) {
      navigation.navigate("Register");
    }
  };


  componentDidUpdate (prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    this._bootstrapAsync();
  }

  // Render any loading content that you like here
  render() {
    console.log("RegisterLoadingScreen");
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
