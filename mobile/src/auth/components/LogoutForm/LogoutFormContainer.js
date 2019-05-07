import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authActionCreators from "../../actions/auth";
import LogoutForm  from "./LogoutForm";

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
      ...authActionCreators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutForm);