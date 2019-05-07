/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreenContainer from "./src/auth/screens/AuthLoadingScreen/AuthLoadingScreenContainer";
import { AuthStack } from "./src/auth/navigators/auth";
import { AppFullStack } from "./src/calls/navigators";

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreenContainer,
      App: AppFullStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
