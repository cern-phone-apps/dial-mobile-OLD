import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import RecentCallsScreen from '../screens/RecentCallsScreen'
import ContactsScreen from '../screens/ContactsScreen'
import KeypadScreen from '../screens/KeypadScreen'
import SettingsScreen from '../containers/screens/SettingsScreen'

function getAndroidIcon (iconName, tintColor = 'white') {
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

const RecentCallsScreenOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon
      const iconName = 'md-clock'
      const { routeName } = navigation.state

      icon = getAndroidIcon(routeName, iconName)
      return icon
    },
    tabBarLabel: 'Recent',
    title: 'Recent Calls',
    tabBarColor: '#2185d0'
  }
}

const ContactsScreenOptions = () => {
  return {
    tabBarIcon: () => {
      return getAndroidIcon('md-contacts')
    },
    tabBarLabel: 'Contacts',
    title: 'Contacts',
    tabBarColor: '#2185d0'
  }
}

const KeypadScreenOptions = () => {
  return {
    tabBarIcon: () => {
      return getAndroidIcon('md-keypad')
    },
    tabBarLabel: 'Keypad',
    title: 'Keypad',
    tabBarColor: '#2185d0'
  }
}

const SettingsScreenOptions = () => {
  return {
    tabBarIcon: () => {
      return getAndroidIcon('md-settings')
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
