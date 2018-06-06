import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

export class SettingsScreen extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  _handlePressAsync = () => {
    this.props.logout()
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!!!</Text>
        <Button title="Logout" color={'red'} onPress={this._handlePressAsync}/>
      </View>
    )
  }
}

