/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreenContainer from "./src/calls/screens/Home/HomeContainer";

var WebRTC = require("react-native-webrtc");

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  }
];

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class RecentCallsScreen extends React.Component {

  static navigationOptions = {
    title: 'Recent',
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftIcon={{ name: "user-circle", type: "font-awesome", color: "blue" }}
      rightIcon={{ name: "phone", type: "font-awesome" }}
      bottomDivider={true}
    />
  );

  render() {
    return (
      <View>
        {/* other code from before here */}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreenContainer,
  Details: DetailsScreen
});

const RecentStack = createStackNavigator({
  Recent: RecentCallsScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

export default createAppContainer(
  createBottomTabNavigator(
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
      }),
      // tabBarOptions: {
      //   activeTintColor: "tomato",
      //   inactiveTintColor: "gray"
      // }
    }
  )
);
