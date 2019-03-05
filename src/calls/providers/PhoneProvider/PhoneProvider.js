import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { Dial } from "../../../../external/tone-webrtc-api/dial-api";
import {
  errorMessage,
  toneInMessage,
  toneOutMessage
} from "../../../common/utils/logging";

export const phoneService = ComponentToWrap => {
  return class ThemeComponent extends Component {
    // let’s define what’s needed from the `context`
    static contextTypes = {
      phoneService: PropTypes.object
    };
    render() {
      const { phoneService } = this.context;
      // what we do is basically rendering `ComponentToWrap`
      // with an added `theme` prop, like a hook
      return <ComponentToWrap {...this.props} phoneService={phoneService} />;
    }
  };
};

export class PhoneProvider extends Component {
  static propTypes = {
    // onCall: PropTypes.bool.isRequired,
    // Functions
    requestConnection: PropTypes.func.isRequired,
    requestDisconnection: PropTypes.func.isRequired,
    setDisconnected: PropTypes.func.isRequired
  };

  state = {
    phoneService: this
  };
  static childContextTypes = {
    phoneService: PropTypes.object.isRequired
  };
  getChildContext() {
    return { phoneService: this.state.phoneService };
  }

  /**
   * Class functionality
   */

  /**
   * When the component is mounted we load Dial
   */
  componentDidMount() {
    let dial = new Dial();
    this.setState(
      {
        dial: dial
      },
      () => {
        this.addListeners();
      }
    );
  }

  addListeners = () => {
    this.notifier = this.state.dial.getNotifier();
    if (this.notifier) {
      this.notifier.on("ToneEvent", event => {
        this.eventHandler(event);
      });
    }
  };

  /**
   * Authenticates the user using the Telephony API
   * @param phoneNumber
   * @returns {boolean|void|*}
   */
  authenticateUser = phoneNumber => {
    const { requestConnection } = this.props;

    this.setState({ phoneNumber: phoneNumber });
    requestConnection();
    // this.state.dial.authenticate(phoneNumber, JSON.stringify(token));
    this.state.dial.authenticate(phoneNumber, JSON.stringify({}));
    // TODO The ideal thing here is to know if the authentication succeeded
  };

  disconnectUser = () => {
    const { requestDisconnection, setDisconnected } = this.props;

    toneOutMessage(`UnAuthenticating user`);

    this.setState({ phoneNumber: undefined });

    if (this.props.onCall) {
      this.hangUpCurrentCall();
    }
    requestDisconnection(true);

    try {
      this.state.dial.stopAgent();
    } catch (error) {
      errorMessage(`Agent is not connected`);
      setDisconnected();
    }

    // TODO Maybe stopAgent() is not the right method to call
  };

  eventHandler = event => {
    toneInMessage(`Tone Event received: ${event.name}`);
    toneInMessage(event);

    switch (event.name) {
      // Registering
      case "registered":
        this.props.setConnected();
        break;
      case "unregistered":
        this.props.setDisconnected();
        break;
    }
  };

  testFunction = () => {
    console.log("Hello World");
  };

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}
