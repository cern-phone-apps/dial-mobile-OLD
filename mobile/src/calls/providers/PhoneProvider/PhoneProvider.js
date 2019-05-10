import React, { Children, Component } from 'react';
import { Alert } from 'react-native';

import PropTypes from 'prop-types';
import { Dial } from '../../../../external/tone-webrtc-api/dial-api';
import {
  errorMessage,
  logMessage,
  toneInMessage,
  toneOutMessage
} from '../../../common/utils/logging';
import * as Sound from '../../utils/sound/Sound';

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
    const dial = new Dial();
    this.setState(
      {
        dial
      },
      () => {
        this.addListeners();
      }
    );
  }

  addListeners = () => {
    this.notifier = this.state.dial.getNotifier();
    if (this.notifier) {
      this.notifier.on('ToneEvent', event => {
        this.eventHandler(event);
      });
    }
  };

  /**
   * Authenticates the user using the Telephony API
   * @param phoneNumber
   * @returns {boolean|void|*}
   */
  authenticateUser = (phoneNumber, token) => {
    const { requestConnection } = this.props;

    this.setState({ phoneNumber });
    requestConnection();
    this.state.dial.authenticate(phoneNumber, token);
    // this.state.dial.authenticate(phoneNumber, JSON.stringify({}));
    // TODO The ideal thing here is to know if the authentication succeeded
  };

  disconnectUser = async () => {
    const { requestDisconnection, setDisconnected } = this.props;

    toneOutMessage(`UnAuthenticating user`);

    this.setState({ phoneNumber: undefined });

    if (this.props.onCall) {
      this.hangupCurrentCall();
    }
    await requestDisconnection(true);

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
  makeCall = (name = 'Unknown', phoneNumber) => {
    const { makeCall, setIsCalling, endSearch } = this.props;
    const { dial } = this.state;

    toneOutMessage(`Calling user ${name} with number ${phoneNumber}`);
    makeCall({
      name,
      phoneNumber
    });
    // this.playRingbacktone();
    // endSearch();
    try {
      dial.call(phoneNumber);
      return true;
    } catch (error) {
      errorMessage(error);
      setIsCalling(false);
      return false;
    }
  };

  hangupCurrentCall = () => {
    const { dial } = this.state;
    const { hangupCall } = this.props;
    toneOutMessage(`Hang up current call`);
    hangupCall();
    return dial.hangUp();
  };

  acceptIncomingCallAction = () => {
    const { acceptIncomingCall } = this.props;
    toneOutMessage(`Accepting incoming call`);

    // this.stopRingTone();
    // acceptIncomingCall();
    this.state.dial.answer();
  };

  addCallToRecentCalls = () => {
    logMessage('Adding to recent calls');
    const { addRecentCall, recipient } = this.props;
    recipient.startTime = this.state.startTime;
    logMessage(recipient);
    addRecentCall(recipient);
  };

  handleRegisteredEvent = () => {
    this.props.setConnected();
  };

  handleDisconnectedEvent = () => {
    this.props.setDisconnected();
  };

  handleTerminatedEvent = () => {
    const { hangupCall } = this.props;
    hangupCall();
    this.addCallToRecentCalls();
  };

  handleInviteReceivedEvent = event => {
    const caller = event.data.session.remoteIdentity.friendlyName.split('@')[0];

    this.props.setIsReceivingCall(caller, caller);
    Sound.receivingCall();
    Alert.alert(
      caller,
      'You are receiving a call ',
      [
        {
          text: 'Answer',
          onPress: () => this.acceptIncomingCallAction()
        },
        {
          text: 'Reject',
          onPress: () => this.hangupCurrentCall()
        }
      ],
      { cancelable: false }
    );
  };

  handleAcceptedEvent = () => {
    Sound.stop();
    // TODO
    this.setState({
      startTime: Date.now()
    });
    this.props.acceptCall();
  };

  handleRejectedEvent = () => {
    const { setCallMissed } = this.props;

    Sound.stop();
    setCallMissed();
  };

  handleFailedEvent = () => {
    // TODO
    const { callFailed } = this.props;
    const tempFailedMessage = {
      code: {
        status_code: 'NI'
      },
      description: 'Call failed'
    };
    callFailed(tempFailedMessage);
  };

  // handleByeEvent = () => {
  //   const { hangupCall } = this.props;
  //   toneOutMessage(`Hang up current call`);
  //   hangupCall();
  // };

  eventHandler = event => {
    toneInMessage(`Tone Event received: ${event.name}`);
    toneInMessage(event);

    switch (event.name) {
      // The user registered a phone number. He is able to make/receive calls
      case 'registered':
        this.handleRegisteredEvent();
        break;
      // The user is unregistered. He is no longer able to make/receive calls
      case 'unregistered':
        this.handleDisconnectedEvent();
        break;
      // The call is finished
      case 'terminated':
        this.handleTerminatedEvent();
        break;
      case 'accepted':
        this.handleAcceptedEvent();
        break;
      case 'rejected':
        this.handleRejectedEvent();
        break;
      case 'inviteReceived':
        this.handleInviteReceivedEvent(event);
        break;
      case 'failed':
        this.handleFailedEvent();
        break;
      //
      // case 'bye':
      //   this.handleByeEvent();
      //   break;

      case 'progress':
        logMessage(event);
        logMessage('Calling...');
        Sound.makingCall();
        this.props.setIsCalling(true);
        break;

      case 'cancel':
        Sound.stop();
        break;

      default:
        errorMessage(`Unhandled event: ${event.name}`);
    }
  };

  testFunction = () => {
    console.log('Hello World');
  };

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}

export { phoneService as withPhoneService };
