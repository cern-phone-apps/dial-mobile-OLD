import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MakeCallForm from '../../components/MakeCallForm/MakeCallForm';
import OnCallScreen from '../OnCallScreen/OnCallScreen';
import MakingCallScreenContainer from '../MakingCallScreen/MakingCallScreenContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  makeCallForm: {
    position: 'absolute',
    bottom: 0,
    transform: [{ translateY: 1 }],
    paddingBottom: 10
  }
});

export const ConnectedScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CERN Phone Mobile</Text>
      <View style={styles.makeCallForm}>
        <MakeCallForm />
      </View>
    </View>
  );
};

ConnectedScreen.propTypes = {
  onCall: PropTypes.bool.isRequired,
  calling: PropTypes.bool.isRequired
};

export default ConnectedScreen;
