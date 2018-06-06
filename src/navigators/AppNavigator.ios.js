import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import RecentCallsScreen from '../screens/RecentCallsScreen'
import ContactsScreen from '../screens/ContactsScreen'
import KeypadScreen from '../screens/KeypadScreen'
import SettingsScreen from '../containers/screens/SettingsScreen'

function getIosIcon (iconName, focused, tintColor = '#2185d0') {
  iconName = `ios-${iconName}${focused ? '' : '-outline'}`
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

const RecentCallsScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => {
      return getIosIcon('clock', focused)
    },
    tabBarLabel: 'Recent',
    title: 'Recent Calls'
  }
}

const ContactsScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => {
      return getIosIcon('contacts', focused)
    },
    tabBarLabel: 'Contacts',
    title: 'Contacts'
  }
}

const KeypadScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => {
      return getIosIcon('keypad', focused)
    },
    tabBarLabel: 'Keypad',
    title: 'Keypad'
  }
}

const SettingsScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => {
      return getIosIcon('options', focused)
    },
    tabBarLabel: 'Settings',
    title: 'Settings'
  }
}

const IosApp = createBottomTabNavigator(
  {
    RecentCalls: {screen: RecentCallsScreen, navigationOptions: RecentCallsScreenOptions},
    Contacts: {screen: ContactsScreen, navigationOptions: ContactsScreenOptions},
    Keypad: {screen: KeypadScreen, navigationOptions: KeypadScreenOptions},
    Settings: {screen: SettingsScreen, navigationOptions: SettingsScreenOptions}
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
