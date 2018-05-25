import React from 'react'
import { Text, View, Button, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation' // 1.0.0-beta.11
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <SafeAreaView>
        <Button
          onPress={() => navigate('Second')}
          title="Click here"
        />
      </SafeAreaView>)
  }
}

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Details'
  }

  render () {
    return <SafeAreaView><Text>It works!</Text></SafeAreaView>
  }
}

const IosApp = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Second: {screen: SecondScreen}
})

const AndroidApp = createMaterialTopTabNavigator({
  Home: {screen: HomeScreen},
  Second: {screen: SecondScreen}
})

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
        <Provider store={createStore(() => {})}>
          {Platform.OS === 'ios'
            ? <IosApp/>
            : <AndroidApp/>
          }
        </Provider>
      </View>
    )
  }
}
