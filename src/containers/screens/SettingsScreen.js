import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as meActionCreators from 'src/actions/user/me'
import * as authActionCreators from 'src/actions/auth'
import { isAuthenticated } from 'src/reducers/auth'
import { SettingsScreen } from 'src/screens/SettingsScreen'

function mapStateToProps (state) {
  return {
    isAuthenticated: isAuthenticated(state)
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
)(SettingsScreen)
