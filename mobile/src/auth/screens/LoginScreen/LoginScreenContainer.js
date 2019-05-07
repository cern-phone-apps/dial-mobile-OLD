import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActionCreators from '../../actions/auth';
import LoginScreen from './LoginScreen';

function mapStateToProps(state) {
  const { auth } = state;
  return {
    loggedIn: auth.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...loginActionCreators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
