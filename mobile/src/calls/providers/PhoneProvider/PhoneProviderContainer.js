import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as connectionActionCreators from '../../actions/connection';
import * as callActionCreators from '../../actions/call';
import * as recentCallActionCreators from '../../actions/recent';
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
      ...connectionActionCreators,
      ...callActionCreators,
      ...recentCallActionCreators
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
