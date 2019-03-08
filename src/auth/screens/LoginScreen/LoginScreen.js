import React from "react";
import { WebView } from "react-native-webview";
import { logMessage } from "../../../common/utils/logging";
import PropTypes from "prop-types";

const LOGIN_PAGE_URL = "https://webrtc-auth.web.cern.ch/";

class LoginPage extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    token: PropTypes.string
  };

  _signInAsync = () => {
    const { loggedIn, navigation } = this.props;

    if (loggedIn) {
      navigation.navigate("App");
    }
  };

  render = () => {
    const {login} = this.props;
    return (
      <WebView
        source={{ uri: LOGIN_PAGE_URL }}
        onNavigationStateChange={webViewState => {
          if (webViewState.url.includes("code=") && webViewState.loading) {
            let code = webViewState.url.substring(55);
            logMessage(`Login the user...`);
            logMessage(code);
            login(code);
            this._signInAsync();
          }
        }}
      />
    );
  };
}

export default LoginPage;
