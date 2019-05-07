import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "react-native-elements";

import { phoneService } from "../../providers/PhoneProvider/PhoneProvider";

import { CUSTOM_NUMBER } from 'react-native-dotenv'
import { FlatList } from "react-native";


export class RegisterForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  };

  /**
   * Register the user in the Telephony Backend
   */
  registerUser = () => {
    const { phoneService, phoneNumber, navigation, token } = this.props;
    console.log(`Registering user ${phoneNumber}`);
    // const result = phoneService.authenticateUser(CUSTOM_NUMBER);
    const result = phoneService.authenticateUser(phoneNumber, token);
    // navigation.navigate("RegisterLoading");
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    this.props.phoneService.testFunction();
    const {phoneNumber} = this.props;
    return (
      <ListItem
        title={`${phoneNumber}`}
        chevron={true}
        leftIcon={{ name: "phone", type: "font-awesome" }}
        bottomDivider={true}
        onPress={this.registerUser}
      />
    );
  }
}

export default phoneService(RegisterForm);
