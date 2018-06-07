import PropTypes from 'prop-types'
import React from 'react'
import { Button, StyleSheet, Text, View, Platform } from 'react-native'
import { AuthSession } from 'expo'

import IosApp from '../navigators/AppNavigator.ios'
import AndroidApp from '../navigators/AppNavigator.android'

import {
  REACT_APP_OAUTH_CLIENT_ID,
  REACT_APP_OAUTH_AUTHORIZATION_URL
} from 'src/settings'

const MobileApp = () => {
  if (Platform.OS === 'ios') {
    return <IosApp/>
  } else {
    return <AndroidApp/>
  }
}


export class LoginScreen extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    getMe: PropTypes.func.isRequired
  }

  state = {
    result: null,
  }

  render () {
    if (this.props.isAuthenticated) {
      return <MobileApp />
    } else {
      return (
        <View style={styles.container}>
          <Text>Logged in: {this.props.loggedIn}</Text>
          <Button title="Open CERN Auth" onPress={this._handlePressAsync}/>
          {this.state.result ? (
            <Text>{JSON.stringify(this.state.result)}</Text>
          ) : null}
        </View>
      )
    }
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl()

    const authUrl = `${REACT_APP_OAUTH_AUTHORIZATION_URL}` +
      `?response_type=code` +
      `&client_id=${REACT_APP_OAUTH_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`

    let result = await AuthSession.startAsync({
      authUrl: authUrl,
    })
    this.setState({result})
    this.props.login(result.params.code).then(() => {
      this.props.getMe()
    }).catch((e) => console.error(e))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

