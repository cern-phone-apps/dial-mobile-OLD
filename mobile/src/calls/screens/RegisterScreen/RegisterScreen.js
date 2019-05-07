import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { FlatList, View } from 'react-native';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class RegisterScreen extends React.Component {
  static defaultProps = {
    numbers: []
  };

  static propTypes = {
    connected: PropTypes.bool.isRequired,
    numbers: PropTypes.arrayOf(PropTypes.object),
    getUserPhoneNumbers: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  };

  static navigationOptions = {
    title: 'Select a phone number'
  };

  componentDidMount = () => {
    const { getUserPhoneNumbers } = this.props;
    console.log('getUserPhoneNumbers');
    getUserPhoneNumbers();
    console.log(this.props);
  };

  componentDidUpdate = () => {
    const { connected, navigation } = this.props;

    if (connected) {
      navigation.navigate('AppRegistered');
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const { token } = this.props;
    return <RegisterForm phoneNumber={item.phoneNumber} token={token} />;
  };

  render = () => {
    console.log('RegisterScreen');
    const { numbers } = this.props;
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={numbers}
          renderItem={this.renderItem}
        />
      </View>
    );
  };
}

export default RegisterScreen;
