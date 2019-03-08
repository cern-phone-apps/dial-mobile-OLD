import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as connectionActionCreators from "../../actions/connection";
import { getUserPhoneNumbers, setActiveNumber } from "../../actions/numbers";
import RegisterScreen from "./RegisterScreen";

function mapStateToProps(state) {
  const {connection, numbers} = state.calls;
  return {
    connected: connection? connection.connected : false,
    numbers: numbers.numbers
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
