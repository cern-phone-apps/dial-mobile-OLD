import React from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

import { NativeRouter } from 'react-router-native'

import configureStore from './src/store'
import LoginScreen from './src/containers/screens/LoginScreen'

const {store, persistor} = configureStore()

export default class App extends React.Component {
  componentDidMount () {
    console.log(Constants.statusBarHeight)
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}}>
          <StatusBar />
        </View>
        <Provider store={store}>
          <NativeRouter>
            <LoginScreen />
          </NativeRouter>
        </Provider>
      </View>
    )
  }
}
