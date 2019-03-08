import { connect } from "react-redux";
import { UnRegisterLoadingScreen } from "./UnRegisterLoadingScreen";


function mapStateToProps(state) {
  const {connection} = state.calls;
  return {
    connected: connection? connection.connected : false,
  };
}

export default connect(
  mapStateToProps,
)(UnRegisterLoadingScreen);
