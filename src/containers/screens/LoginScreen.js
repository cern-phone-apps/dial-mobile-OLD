import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as meActionCreators from 'src/actions/user/me'
import * as authActionCreators from 'src/actions/auth'
import { LoginScreen } from 'src/screens/LoginScreen'

function mapStateToProps ({auth}) {
  return {
    // isAuthenticated: isAuthenticated(state),
    loggedIn: auth.loggedIn
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...meActionCreators,
    ...authActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
