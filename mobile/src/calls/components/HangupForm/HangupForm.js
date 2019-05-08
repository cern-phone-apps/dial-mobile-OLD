import { StyleSheet, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

import { phoneService } from '../../providers/PhoneProvider/PhoneProvider';

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10
  }
});

export class HangupForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired
  };

  hangupCall = () => {
    const { phoneService } = this.props;
    console.log(`Hanging up call`);
    phoneService.hangupCurrentCall();
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    return (
      <View>
        <Button
          onPress={this.hangupCall}
          title="Hangup"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  }
}

export default phoneService(HangupForm);
