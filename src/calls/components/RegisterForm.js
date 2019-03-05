import { Button, Text, TextInput, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";

import {phoneService} from "../providers/PhoneProvider/PhoneProvider"

export class RegisterForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired
  };

  state = {
    phoneNumber: ""
  };

  /**
   * Register the user in the Telephony Backend
   */
  registerUser = () => {
    const {phoneNumber} = this.state;
    const {phoneService} = this.props;
    console.log(`Registering user ${phoneNumber}`);
    const result = phoneService.authenticateUser(phoneNumber);
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    this.props.phoneService.testFunction();
    return (
      <View style={[this.props.style.box, this.props.style.box2]}>
        <Text>Register your number:</Text>
        <TextInput
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          value={this.props.value}
          keyboardType={"number-pad"}
        />
        <Button onPress={this.registerUser} title="Register" color="#008000" />
      </View>
    );
  }
}

export default phoneService(RegisterForm);
