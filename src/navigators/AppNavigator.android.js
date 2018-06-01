import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import RecentCallsScreen from '../screens/RecentCallsScreen'
import ContactsScreen from '../screens/ContactsScreen'
import KeypadScreen from '../screens/KeypadScreen'
import SettingsScreen from '../screens/SettingsScreen'

function getAndroidIcon (routeName, expectedName, iconName, tintColor = 'white') {
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

const RecentCallsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'md-clock'
      const { routeName } = navigation.state
      const expectedName = 'RecentCalls'

      icon = getAndroidIcon(routeName, expectedName, iconName)
      return icon
    },
    tabBarLabel: 'Recent',
    title: 'Recent Calls',
    tabBarColor: '#2185d0'
  }
}

const ContactsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'md-contacts'
      const { routeName } = navigation.state
      const expectedName = 'RecentCalls'

      icon = getAndroidIcon(routeName, expectedName, iconName)
      return icon
    },
    tabBarLabel: 'Contacts',
    title: 'Contacts',
    tabBarColor: '#2185d0'
  }
}

const KeypadScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'md-keypad'
      const { routeName } = navigation.state
      const expectedName = 'RecentCalls'

      icon = getAndroidIcon(routeName, expectedName, iconName)

      return icon
    },
    tabBarLabel: 'Keypad',
    title: 'Keypad',
    tabBarColor: '#2185d0'
  }
}

const SettingsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'md-settings'
      const { routeName } = navigation.state
      const expectedName = 'RecentCalls'

      icon = getAndroidIcon(routeName, expectedName, iconName)

      return icon
    },
    tabBarLabel: 'Settings',
    title: 'Settings',
    tabBarColor: '#2185d0'
  }
}

const AndroidApp = createMaterialBottomTabNavigator(
  {
    RecentCalls: { screen: RecentCallsScreen, navigationOptions: RecentCallsScreenOptions },
    Contacts: { screen: ContactsScreen, navigationOptions: ContactsScreenOptions },
    Keypad: { screen: KeypadScreen, navigationOptions: KeypadScreenOptions },
    Settings: { screen: SettingsScreen, navigationOptions: SettingsScreenOptions }
  })

export default AndroidApp
