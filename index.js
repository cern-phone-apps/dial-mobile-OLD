/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

import PhoneProvider from "./src/calls/providers/PhoneProvider/PhoneProviderContainer";
/**
 * Set up the store and the history
 */
const { store } = configureStore();

class PhoneMobile extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PhoneProvider>
          <App />
        </PhoneProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => PhoneMobile);
