import React from 'react'
import { Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings</Text>
      </View>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
})

const MyStack = createStackNavigator(
  {
    Root: tabNavigator
  },
  {
    headerMode: 'none'
  }
)

class CustomNavigator extends React.Component {
  static router = MyStack.router

  render () {
    const {navigation} = this.props

    return <MyStack navigation={navigation}/>
  }
}

export default CustomNavigator
