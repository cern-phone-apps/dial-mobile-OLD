import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MakeCallForm from '../../components/MakeCallForm/MakeCallForm';

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

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CERN Phone Mobile</Text>
      <View style={styles.makeCallForm}>
        <MakeCallForm />
      </View>
    </View>
  );
};
