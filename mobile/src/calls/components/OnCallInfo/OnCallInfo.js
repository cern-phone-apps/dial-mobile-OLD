import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import HangupForm from '../HangupForm/HangupForm';
import Timer from '../Timer/Timer';

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1 },
  ongoingCall: {
    fontSize: 20,
    opacity: 0.6,
    position: 'absolute',
    top: '20%'
  },
  recipientInfo: {
    alignItems: 'center',
    position: 'absolute',
    transform: [{ translateY: 0.5 }],
    top: '30%'
  },
  recipientName: {
    fontSize: 25
  },
  recipientNumber: {
    fontSize: 20
  }
});

export function OnCallInfo({ recipient }) {
  return (
    <View style={styles.container}>
      <Text style={styles.ongoingCall}>ONGOING CALL WITH</Text>
      <View style={styles.recipientInfo}>
        <Text style={styles.recipientName}>{recipient.name} Name Surname</Text>
        <Text style={styles.recipientNumber}>65226</Text>
        <Timer />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '10%'
        }}
      >
        <HangupForm />
      </View>
    </View>
  );
}

OnCallInfo.propTypes = {
  recipient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  }).isRequired
};

export default OnCallInfo;
