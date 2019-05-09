import { connect } from 'react-redux';
import CallingScreen from './CallingScreen';

function mapStateToProps(state) {
  const { calling, recipient } = state.calls.call;
  return {
    calling,
    recipient
  };
}

export default connect(mapStateToProps)(CallingScreen);
