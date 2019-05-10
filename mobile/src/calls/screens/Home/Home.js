import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';
import { DisconnectedScreen } from '../DisconnectedScreen/DisconnectedScreen';
import ConnectedScreenContainer from '../ConnectedScreen/ConnectedScreenContainer';
import { logMessage } from '../../../common/utils/logging';
import { redirectToCalling } from '../../navigators/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  static defaultProps = {
    connected: false,
    connecting: false
  };

  static propTypes = {
    connected: PropTypes.bool,
    connecting: PropTypes.bool,
    disconnecting: PropTypes.bool.isRequired
  };

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(
        json =>
          console.log(json) || console.log(`There is internet connectivity`)
      );
  };

  componentDidUpdate = (prevProps, prevState) => {
    logMessage('Updating ConnectedScreen');
    logMessage(this.props);
    const { calling, navigation } = this.props;
    redirectToCalling(calling, navigation);
  };

  render() {
    const { connected } = this.props;

    return (
      <View style={styles.container}>
        {!connected ? (
          // Disconnected Screen
          <DisconnectedScreen />
        ) : (
          // Connected Screen
          <ConnectedScreenContainer />
        )}
      </View>
    );
  }
}

export default HomeScreen;
