import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as connectionActionCreators from "../../actions/connection";
import { getUserPhoneNumbers, setActiveNumber } from "../../actions/numbers";
import RegisterScreen from "./RegisterScreen";

function mapStateToProps(state) {
  const {connection, numbers} = state.calls;
  const {auth} = state;

  return {
    connected: connection? connection.connected : false,
    numbers: numbers.numbers,
    token: auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...connectionActionCreators,
      getUserPhoneNumbers,
      setActiveNumber
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
