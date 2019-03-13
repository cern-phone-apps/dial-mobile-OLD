import React from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import DisconnectForm from "../../../calls/components/DisconnectForm/DisconnectForm";
import LogoutFormContainer from "../../../auth/components/LogoutForm/LogoutFormContainer";

export class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();

    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <DisconnectForm />
        <LogoutFormContainer />
        {/*<Button*/}
          {/*type="clear"*/}
          {/*buttonStyle={styles.button}*/}
          {/*title={"Sign out & disconnect"}*/}
          {/*onPress={this._signOutAsync}*/}
        {/*/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10
  },
  buttonTitle: {
    color: "#FF0000"
  }
});
