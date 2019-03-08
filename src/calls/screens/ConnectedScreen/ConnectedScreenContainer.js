import { connect } from "react-redux";

import ConnectedScreen from "./ConnectedScreen";

function mapStateToProps(state) {
  const { call } = state.calls;
  return {
    onCall: call.onCall,
    calling: call.calling,
  };
}

export default connect(mapStateToProps)(ConnectedScreen);
