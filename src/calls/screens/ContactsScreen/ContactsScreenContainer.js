import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as callActionCreators from "../../actions/call";
import { ContactsScreen } from "./ContactsScreen";

function mapStateToProps(state) {
  const { calls } = state;
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...callActionCreators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsScreen);
