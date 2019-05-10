import { connect } from 'react-redux';

import ConnectedScreen from './ConnectedScreen';
import withOnGoingCallBanner from '../../../common/utils/calls';

function mapStateToProps(state) {
  const { call } = state.calls;
  return call;
}

export default connect(mapStateToProps)(withOnGoingCallBanner(ConnectedScreen));
