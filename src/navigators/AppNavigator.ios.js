import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import {Ionicons} from '@expo/vector-icons'

import RecentCallsScreen from '../screens/RecentCallsScreen'
import ContactsScreen from '../screens/ContactsScreen'
import KeypadScreen from '../screens/KeypadScreen'
import SettingsScreen from '../containers/screens/SettingsScreen'

function getIosIcon (routeName, iconName, focused, tintColor = '#2185d0') {
  iconName = `ios-${iconName}${focused ? '' : '-outline'}`
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

const RecentCallsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'clock'
      const { routeName } = navigation.state

      icon = getIosIcon(routeName, iconName, focused)

      return icon
    },
    tabBarLabel: 'Recent',
    title: 'Recent Calls'
  }
}

const ContactsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'contacts'
      const { routeName } = navigation.state

      icon = getIosIcon(routeName, iconName, focused)

      return icon
    },
    tabBarLabel: 'Contacts',
    title: 'Contacts'
  }
}

const KeypadScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'keypad'
      const { routeName } = navigation.state

      icon = getIosIcon(routeName, iconName, focused)

      return icon
    },
    tabBarLabel: 'Keypad',
    title: 'Keypad'
  }
}

const SettingsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'options'
      const { routeName } = navigation.state

      icon = getIosIcon(routeName, iconName, focused)

      return icon
    },
    tabBarLabel: 'Settings',
    title: 'Settings'
  }
}

const IosApp = createBottomTabNavigator(
  {
    RecentCalls: { screen: RecentCallsScreen, navigationOptions: RecentCallsScreenOptions },
    Contacts: { screen: ContactsScreen, navigationOptions: ContactsScreenOptions },
    Keypad: { screen: KeypadScreen, navigationOptions: KeypadScreenOptions },
    Settings: { screen: SettingsScreen, navigationOptions: SettingsScreenOptions }
  },
  {
    tabBarOptions: {
      labelStyle: {
        // fontSize: 12
      },
      style: {}
    }
  })

export default IosApp
