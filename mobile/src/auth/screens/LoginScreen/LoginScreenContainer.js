import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActionCreators from "../../actions/auth";
import LoginScreen from "./LoginScreen";
import { isAuthenticated } from "../../utils/tokens";

function mapStateToProps(state) {
  const {auth} = state;
  console.log(auth.loggedIn);
  return {
    loggedIn: auth.loggedIn,
    isAuthenticated: isAuthenticated(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...loginActionCreators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
