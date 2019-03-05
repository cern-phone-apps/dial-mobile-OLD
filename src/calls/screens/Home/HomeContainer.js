import { connect } from "react-redux";

import { HomeScreen } from "./Home";

function mapStateToProps(state) {
  const { connection } = state.calls;
  return {
    connected: connection.connected,
    connecting: connection.connecting,
    disconnecting: connection.disconnecting
  };
}

export default connect(mapStateToProps)(HomeScreen);
