import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthSession } from 'expo'


import { isAuthenticated } from '../reducers/auth'
import * as authActionCreators from '../actions/auth'
import * as meActionCreators from '../actions/user/me'

import {
  REACT_APP_OAUTH_CLIENT_ID,
  REACT_APP_OAUTH_AUTHORIZATION_URL
} from '../settings'

class LoginScreen extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    getMe: PropTypes.func.isRequired
  }

  state = {
    result: null,
  }

  render () {
    return (
      <View style={styles.container}>
        <Button title="Open CERN Auth" onPress={this._handlePressAsync}/>
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
      </View>
    )
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
    console.log(result)
    console.log(result.params.code)
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

function mapStateToProps (state) {
  return {
    isAuthenticated: isAuthenticated(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...meActionCreators,
    ...authActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
