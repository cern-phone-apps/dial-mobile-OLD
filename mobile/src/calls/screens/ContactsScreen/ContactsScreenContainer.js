import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { callActions } from 'dial-core';
import { ContactsScreen } from './ContactsScreen';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...callActions
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(ContactsScreen);
