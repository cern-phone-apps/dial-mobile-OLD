import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-elements';
import HangupForm from '../HangupForm/HangupForm';

const OnCallInfo = () => (
  <View>
    <Text>You are on a call</Text>
    {/* Add timer */}
    <HangupForm />
  </View>
);

export default OnCallInfo;
