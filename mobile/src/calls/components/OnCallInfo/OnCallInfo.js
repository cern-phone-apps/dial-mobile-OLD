import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-elements';
import HangupForm from '../HangupForm/HangupForm';

export function OnCallInfo() {
  return (
    <View>
      <Text>You are on a call</Text>
      <HangupForm />
    </View>
  );
}

export default OnCallInfo;
