import { StyleSheet, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { Button} from "react-native-elements";

import {withNavigation} from 'react-navigation';
import { phoneService } from "../../../calls/providers/PhoneProvider/PhoneProvider";

export class LogoutForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  /**
   * Register the user in the Telephony Backend
   */
  disconnectUserAction = async () => {
    const { phoneService, navigation, logout } = this.props;
    console.log(`Disconnecting user`);
    console.log(this.props);
    phoneService.disconnectUser();
    logout();
    navigation.navigate("Auth");
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    this.props.phoneService.testFunction();
    return (
      <View>
        <Button
          onPress={this.disconnectUserAction}
          title="Logout and Disconnect"
          type="clear"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTitle: {
    color: "#FF0000"
  }
});

export default withNavigation(phoneService(LogoutForm));