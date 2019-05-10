import React from 'react';
import OnCallScreen from '../OnCallScreen/OnCallScreen';
import MakingCallScreenContainer from '../MakingCallScreen/MakingCallScreenContainer';

export default function({ onCall, calling, navigation }) {
  console.log('ON CALL', onCall);
  if (!calling && !onCall) {
    navigation.pop();
  }
  if (onCall) {
    return <OnCallScreen />;
  }
  return <MakingCallScreenContainer />;
}
