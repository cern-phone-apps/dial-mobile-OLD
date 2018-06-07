import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as meActionCreators from 'src/actions/user/me'
import * as authActionCreators from 'src/actions/auth'
import { LoginScreen } from 'src/screens/LoginScreen'
import { isAuthenticated } from 'src/reducers/auth'

function mapStateToProps (state) {
  return {
    isAuthenticated: isAuthenticated(state),
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
