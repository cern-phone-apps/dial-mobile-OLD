import React, { Component } from 'react';
import { Icon, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { logMessage } from '../../../common/utils/logging';
import HangupForm from '../../components/HangupForm/HangupForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  iconTextContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class CallingScreen extends Component {
  static propTypes = {
    calling: PropTypes.bool,
    recipient: PropTypes.shape({
      phoneNumber: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    calling: false
  };

  constructor(props) {
    super(props);
    this.redirectToTabs();
  }

  // Fetch the token from storage then navigate to our appropriate place
  redirectToTabs = async () => {
    const { calling, navigation } = this.props;
    // const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    logMessage('Redirect to tabs');
    if (!calling) {
      logMessage('Redirecting to tabs');
      navigation.navigate('AppTabs');
    }
  };

  componentDidUpdate = () => {
    this.redirectToTabs();
  };

  render() {
    const { recipient } = this.props;
    return (
      <View style={[styles.container]}>
        <View style={[styles.iconTextContainer]}>
          <Text h2>Calling...</Text>
        </View>
        <View style={[styles.iconTextContainer]}>
          <Icon name="phone" size={30} />
          <Text h4>{recipient.phoneNumber}</Text>
        </View>
        <HangupForm />
      </View>
    );
  }
}

export default CallingScreen;
