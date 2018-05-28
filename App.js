import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

import IosApp from 'navigators/AppNavigator.ios'
import AndroidApp from 'navigators/AppNavigator.android'
import configureStore from './src/store'

const {store, persistor} = configureStore()

export default class App extends React.Component {
  componentDidMount () {
    console.log(Constants.statusBarHeight)
  }

  render () {
    console.debug(this.props)
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}}>
          <StatusBar/>
        </View>
        <Provider store={store}>
          {Platform.OS === 'ios'
            ? <IosApp/>
            : <AndroidApp/>
          }
        </Provider>
      </View>
    )
  }
}
