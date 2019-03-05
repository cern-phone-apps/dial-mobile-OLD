import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { Dial } from "../../../../external/tone-webrtc-api/dial-api";
import { toneInMessage } from "../../../common/utils/logging";

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
    requestConnection: PropTypes.func,
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

  eventHandler = event => {
    toneInMessage(`Tone Event received: ${event.name}`);
    toneInMessage(event);
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

  testFunction = () => {
    console.log("Hello World");
  };

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}
