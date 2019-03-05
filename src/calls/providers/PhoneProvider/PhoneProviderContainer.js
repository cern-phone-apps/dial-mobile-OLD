import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as connectionActionCreators from "../../actions/connection";
import { PhoneProvider, phoneService } from "./PhoneProvider";

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...connectionActionCreators
    },
    dispatch
  );
}

export default phoneService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhoneProvider)
);
