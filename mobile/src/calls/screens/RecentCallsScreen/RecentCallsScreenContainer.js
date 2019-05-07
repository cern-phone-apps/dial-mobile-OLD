import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as callActionCreators from '../../actions/call';
import { RecentCallsScreen } from './RecentCallsScreen';

function mapStateToProps(state) {
  const { calls } = state;
  return {
    recentCalls: calls.recent.recentCalls
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
)(RecentCallsScreen);
