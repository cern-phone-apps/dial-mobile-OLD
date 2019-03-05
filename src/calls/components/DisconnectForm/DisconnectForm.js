import { Button, Text, TextInput, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";

import { phoneService } from "../../providers/PhoneProvider/PhoneProvider";

export class DisconnectForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired
  };

  /**
   * Register the user in the Telephony Backend
   */
  disconnectUserAction = () => {
    // const { phoneNumber } = this.state;
    const { phoneService } = this.props;
    console.log(`Disconnecting user`);
    phoneService.disconnectUser();
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    this.props.phoneService.testFunction();
    return (
      <View style={[this.props.style.box, this.props.style.box2]}>
        <Button
          onPress={this.disconnectUserAction}
          title="Disconnect"
          color={"#FF0000"}
        />
      </View>
    );
  }
}

export default phoneService(DisconnectForm);
