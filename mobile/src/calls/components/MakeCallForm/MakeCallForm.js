import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';

import { phoneService } from '../../providers/PhoneProvider/PhoneProvider';
import { logMessage } from '../../../common/utils/logging';

export class MakeCallForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired
  };

  state = {
    phoneNumber: ''
  };

  /**
   * Register the user in the Telephony Backend
   */
  makeCall = () => {
    const { phoneNumber } = this.state;
    const { phoneService } = this.props;
    logMessage(`Calling user ${phoneNumber}`);
    phoneService.makeCall(undefined, phoneNumber);
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    this.props.phoneService.testFunction();
    return (
      <View>
        <Text>Phone number to call:</Text>
        <Input
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          value={this.props.value}
          placeholder="Phone number"
          keyboardType="number-pad"
        />
        <Button
          onPress={this.makeCall}
          title="Make Call"
          buttonStyle={[styles.button]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginTop: 10
  }
});

export default phoneService(MakeCallForm);
