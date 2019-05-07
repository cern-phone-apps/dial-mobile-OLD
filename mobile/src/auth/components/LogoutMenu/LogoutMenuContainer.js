import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withNavigation } from 'react-navigation';
import { logout } from '../../actions/auth';
import LogoutMenu from './LogoutMenu';

import { phoneService } from '../../../calls/providers/PhoneProvider/PhoneProvider';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(phoneService(LogoutMenu)));
