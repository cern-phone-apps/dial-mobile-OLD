import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

import IosApp from './src/navigators/AppNavigator.ios'
import AndroidApp from './src/navigators/AppNavigator.android'
import configureStore from './src/store'
import LoginScreen from './src/screens/LoginScreen'

const { store, persistor } = configureStore()

export default class App extends React.Component {
  componentDidMount () {
    console.log(Constants.statusBarHeight)
  }

  render () {
    console.debug(this.props)
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar />
        </View>
        <Provider store={store}>
          <LoginScreen/>
          {/*{Platform.OS === 'ios'*/}
            {/*? <IosApp />*/}
            {/*: <AndroidApp />*/}
          {/*}*/}
        </Provider>
      </View>
    )
  }
}
