import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-elements';
import HangupForm from '../HangupForm/HangupForm';
import Timer from '../Timer/Timer';

const OnCallInfo = () => (
  <View>
    <Text>You are on a call</Text>
    <HangupForm />
    <Timer />
  </View>
);

export default OnCallInfo;
