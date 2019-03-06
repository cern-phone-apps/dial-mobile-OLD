import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { Dial } from "../../../../external/tone-webrtc-api/dial-api";
import {
  errorMessage,
  toneInMessage,
  toneOutMessage
} from "../../../common/utils/logging";

import { Alert } from "react-native";

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
    onCall: PropTypes.bool,
    connected: PropTypes.bool,
    // Functions
    requestConnection: PropTypes.func,
    requestDisconnection: PropTypes.func,
    setDisconnected: PropTypes.func,
    setIsCalling: PropTypes.func,
    hangupCall: PropTypes.func,
    acceptOutgoingCall: PropTypes.func,
    addRecentCall: PropTypes.func
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
      this.hangupCurrentCall();
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

  /**
   * Makes a call to another person given his/her data
   * @param name Name of the person
   * @param phoneNumber Phone number
   * @returns {*}
   */
  makeCall = (name = "Unknown", phoneNumber) => {
    const { makeCall, setIsCalling, endSearch } = this.props;
    const { dial } = this.state;

    toneOutMessage(`Calling user ${name} with number ${phoneNumber}`);
    makeCall({
      name: name,
      phoneNumber: phoneNumber
    });
    // this.playRingbacktone();
    setIsCalling(true);
    // endSearch();
    try {
      dial.call(phoneNumber);
    } catch (error) {
      errorMessage(error);
      setIsCalling(false);
    }
  };

  hangupCurrentCall = () => {
    const { dial } = this.state;
    const { hangupCall, addRecentCall, recipient } = this.props;

    toneOutMessage(`Hang up current call`);

    hangupCall();
    this.hangupCallEvent();
    console.log("Adding recent call");
    recipient.startTime = this.state.startTime;
    addRecentCall(recipient);
    return dial.hangUp();
  };

  hangupCallEvent = () => {
    const { hangupCall } = this.props;
    hangupCall();
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
      case "terminated":
        this.hangupCallEvent();
        break;
      case "accepted":
        // TODO
        this.setState({
          startTime: Date.now()
        });
        this.props.acceptOutgoingCall();
        break;
      case "rejected":
        // TODO: Detail doesn't include error field nor error code
        const tempRejectedMessage = {
          code: {
            status_code: "NI"
          },
          description: "This person cannot answer now"
        };
        this.props.rejectOutgoingCall(tempRejectedMessage);
        this.hangupCallEvent();
        Alert.alert(
          "Unable to call",
          tempRejectedMessage.description,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
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
