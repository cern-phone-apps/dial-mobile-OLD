import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {login} from "../../actions/auth";
import { isAuthenticated } from "../../utils/tokens";
import LoginWebView from "./LoginWebView";

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
      login
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWebView);
