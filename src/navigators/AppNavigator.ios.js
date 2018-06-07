import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import RecentCallsScreen from 'src/screens/RecentCallsScreen'
import ContactsScreen from 'src/screens/ContactsScreen'
import KeypadScreen from 'src/screens/KeypadScreen'
import SettingsScreen from 'src/containers/screens/SettingsScreen'

function getIosIcon (iconName, focused, tintColor = '#2185d0') {
  iconName = `ios-${iconName}${focused ? '' : '-outline'}`
  return <Ionicons name={iconName} size={25} color={tintColor}/>
}

const ScreenOptions = (iconName) => {
  return {
    tabBarIcon: ({focused}) => {
      return getIosIcon(iconName, focused)
    }
  }
}

const RecentCallsScreenOptions = () => {
  return {
    ...ScreenOptions('clock'),
    tabBarLabel: 'Recent',
    title: 'Recent Calls'
  }
}

const ContactsScreenOptions = () => {
  return {
    ...ScreenOptions('contacts'),
    tabBarLabel: 'Contacts',
    title: 'Contacts'
  }
}

const KeypadScreenOptions = () => {
  return {
    ...ScreenOptions('keypad'),
    tabBarLabel: 'Keypad',
    title: 'Keypad'
  }
}

const SettingsScreenOptions = () => {
  return {
    ...ScreenOptions('options'),
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
