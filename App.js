/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import HomeScreenContainer from "./src/calls/screens/Home/HomeContainer";
import RecentCallsScreenContainer from "./src/calls/screens/RecentCallsScreen/RecentCallsScreenContainer";
import { SignInScreen } from "./src/auth/screens/SignInScreen/SignInScreen";
import { AuthLoadingScreen } from "./src/auth/screens/AuthLoadingScreen/AuthLoadingScreen";
import { Button } from "react-native-elements";

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

    _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button title={"Sign out"} onPress={this._signOutAsync}/>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreenContainer,
  Details: DetailsScreen
});

const RecentStack = createStackNavigator({
  Recent: RecentCallsScreenContainer
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

const AppStack = createBottomTabNavigator(
  {
    Call: HomeStack,
    Recent: RecentStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log(routeName);
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Call") {
          iconName = `ios-call`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge;
        } else if (routeName === "Settings") {
          iconName = `ios-options`;
        } else if (routeName === "Recent") {
          iconName = `ios-time`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
    // tabBarOptions: {
    //   activeTintColor: "tomato",
    //   inactiveTintColor: "gray"
    // }
  }
);

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
