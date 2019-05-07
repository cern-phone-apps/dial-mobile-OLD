import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

import {
  OAUTH_REDIRECT_URL,
  OAUTH_AUTHORIZE_URL,
  OAUTH_CLIENT_ID
} from 'react-native-dotenv';

import QueryStringUtils from '../../utils/queryString';

export default class LoginWebView extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  onNavigationStateChange = ({ url }) => {
    const { login } = this.props;

    console.debug('WebView current url', url);
    if (url.startsWith(OAUTH_REDIRECT_URL)) {
      const codeUrlParam = QueryStringUtils.getParameterByName('code', url);
      if (codeUrlParam) {
        console.debug('CERN OAuth code:', codeUrlParam);
        login(codeUrlParam);
      }
    }
  };

  render() {
    const url = `${OAUTH_AUTHORIZE_URL}?redirect_uri=${OAUTH_REDIRECT_URL}&client_id=${OAUTH_CLIENT_ID}&response_type=code`;
    console.debug('WebView loading:', url);
    return (
      <WebView
        source={{ uri: url }}
        startInLoadingState
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}
