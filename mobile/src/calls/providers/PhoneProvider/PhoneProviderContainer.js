import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connectionActions, callActions, recentCallsActions } from 'dial-core';
import { PhoneProvider, phoneService } from './PhoneProvider';

function mapStateToProps(state) {
  const { calls } = state;
  return {
    connected: calls.connection ? calls.connection.connected : false,
    recipient: calls.call ? calls.call.recipient : undefined,
    onCall: calls.call ? calls.call.onCall : false
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...connectionActions,
      ...callActions,
      ...recentCallsActions
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
