import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActionCreators from "../../actions/auth";
import LoginScreen from "./LoginScreen";

function mapStateToProps(state) {
  const {auth} = state;
  console.log(auth.loggedIn);
  return {
    loggedIn: auth.loggedIn,
    token: auth.token
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
