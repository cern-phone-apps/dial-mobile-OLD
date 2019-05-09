import { connect } from "react-redux";

import { HomeScreen } from "./Home";

function mapStateToProps(state) {
  const { connection, call } = state.calls;
  return {
    connected: connection ? connection.connected : false, // This is needed because we are blacklisting connection on store.js
    calling: call.calling, // This is needed because we are blacklisting connection on store.js
    connecting: connection ? connection.connecting : false,
    disconnecting: connection ? connection.disconnecting : false
  };
}

export default connect(mapStateToProps)(HomeScreen);
