import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, Image, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

class LoginPage extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired
  };

  componentDidUpdate() {
    const { loggedIn, navigation } = this.props;
    if (loggedIn) {
      navigation.navigate('App');
    }
  }

  render = () => {
    const { navigation } = this.props;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: Dimensions.get('window').height - 80,
          backgroundColor: 'white'
        }}
      >
        <Image
          source={require('../../../../assets/assets_CERN-logo_outline.png')}
          resizeMode="contain"
          style={{
            height: 100,
            alignSelf: 'center'
          }}
        />
        <Card title="CERN Phone">
          <Text
            style={{
              textAlign: 'center',
              paddingBottom: 10
            }}
          >
            SignIn with your CERN account to access the CERN Phone app.
          </Text>
          <Button
            onPress={() => navigation.navigate('LoginWebView')}
            title="Sign in"
          />
        </Card>
      </View>
    );
  };
}

export default LoginPage;
