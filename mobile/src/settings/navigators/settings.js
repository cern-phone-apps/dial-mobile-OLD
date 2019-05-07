import React from "react";
import { createStackNavigator } from "react-navigation";
import { SettingsScreen } from "../screens/SettingsScreen/SettingsScreen";


export const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});