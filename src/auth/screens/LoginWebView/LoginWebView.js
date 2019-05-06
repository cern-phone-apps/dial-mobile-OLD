import React, { Component } from "react";
import { WebView } from "react-native-webview";

import {
  API_ENDPOINT,
  OAUTH_REDIRECT_URL,
  OAUTH_AUTHORIZE_URL,
  OAUTH_CLIENT_ID
} from "react-native-dotenv";

import QueryStringUtils from "../../utils/queryString";

export default class OAuthObtainCode extends Component {
  render() {
    const url = `${OAUTH_AUTHORIZE_URL}?redirect_uri=${OAUTH_REDIRECT_URL}&client_id=${OAUTH_CLIENT_ID}&response_type=code`;
    console.debug("WebView loading:", url);
    return (
      <WebView
        ref="webview"
        source={{ uri: url }}
        startInLoadingState={true}
        onNavigationStateChange={this._onNavigationStateChange}
      />
    );
  }

  _onNavigationStateChange = webViewState => {

    const {login} = this.props;

    console.debug("WebView current url", webViewState.url);
    if (webViewState.url.startsWith(OAUTH_REDIRECT_URL)) {
      const codeUrlParam = QueryStringUtils.getParameterByName(
        "code",
        webViewState.url
      );
      if (codeUrlParam) {
        console.debug("CERN OAuth code:", codeUrlParam);
        this.props.login(codeUrlParam);
      }
    }
  };
}
