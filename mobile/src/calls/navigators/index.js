import {
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { CallStack } from "./call";
import { RecentStack } from "./recent";
import { SettingsStack } from "../../settings/navigators/settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import RegisterLoadingScreenContainer from "../screens/RegisterLoadingScreen/RegisterLoadingScreenContainer";
import { RegisterStack } from "./register";
import UnRegisterLoadingScreenContainer from "../screens/UnRegisterLoadingScreen/UnRegisterLoadingScreenContainer";
import { ContactsStack } from "./contacts";

export const AppStack = createBottomTabNavigator(
  {
    Call: CallStack,
    Recent: RecentStack,
    Contacts: ContactsStack,
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
        } else if (routeName === "Contacts") {
          iconName = `ios-contacts`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#c7c9c3",
      style: {
        backgroundColor: "#2196F3"
      }
    }
  }
);
export const AppFullStack = createSwitchNavigator(
  {
    RegisterLoading: RegisterLoadingScreenContainer,
    AppRegistered: AppStack,
    Register: RegisterStack,
    UnRegisterLoading: UnRegisterLoadingScreenContainer
  },
  {
    initialRouteName: "RegisterLoading"
  }
);
