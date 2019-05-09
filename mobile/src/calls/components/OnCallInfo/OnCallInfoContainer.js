import { connect } from 'react-redux';
import OnCallInfo from './OnCallInfo';

function mapStateToProps(state) {
  return {
    recipient: state.calls.call.recipient
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnCallInfo);
