import React from "react";
import { WebView } from "react-native";

const LOGIN_PAGE_URL = "<TODO>";

const LoginPage = props => {
  return (
    <WebView
      source={{ uri: LOGIN_PAGE_URL }}
      onNavigationStateChange={webViewState => {
        if (webViewState.url.includes("code=") && webViewState.loading) {
          let code = webViewState.url.substring(55);
          props.login(code);
        }
      }}
    />
  );
};

export default LoginPage;
