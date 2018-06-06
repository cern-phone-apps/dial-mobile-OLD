import jwtDecode from 'jwt-decode'
import * as authActions from '../actions/auth'

const initialState = {
  loggedIn: false,
  loginInProgress: false,
  access: undefined,
  refresh: undefined,
  errors: {}
}

export function accessToken (state) {
  console.log(`Authenticating with access token: ${state.auth.access.token}`)
  if (state.auth.access.token) {
    return state.auth.access.token
  }
}

export function isAccessTokenExpired (state) {
  if (state.auth.access && state.auth.access.exp) {
    const expired = 1000 * state.auth.access.exp - (new Date()).getTime() < 5000
    return expired
  }
  return true
}

export function refreshToken (state) {
  if (state.auth.refresh) {
    return state.auth.refresh.token
  }
}

export function isRefreshTokenExpired (state) {
  if (state.auth.refresh && state.auth.refresh.exp) {
    return 1000 * state.auth.refresh.exp - (new Date()).getTime() < 5000
  }
  console.log('Refresh token expired')
  return true
}

export function isAuthenticated (state) {
  return !isRefreshTokenExpired(state)
}

export function errors (state) {
  return state.auth.errors
}

export function withAuth (headers = {}) {
  console.log('Calling withAuth')
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}

export function withRefresh (headers = {}) {
  console.log('Calling withrefresh')
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${refreshToken(state)}`
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case authActions.LOGIN_REQUEST:
      return {
        ...state,
        loginInProgress: true
      }
    case authActions.LOGIN_SUCCESS:
      console.log(action.payload)
      return {
        access: {
          token: action.payload.access_token,
          ...jwtDecode(action.payload.access_token)
        },
        refresh: {
          token: action.payload.refresh_token,
          ...jwtDecode(action.payload.refresh_token)
        },
        loggedIn: action.payload.login,
        loginInProgress: false,
        errors: {}
      }
    case authActions.TOKEN_RECEIVED:
      return {
        ...state,
        access: {
          token: action.payload.access_token,
          ...jwtDecode(action.payload.access_token)
        }
      }
    case authActions.LOGIN_FAILURE:
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        loggedIn: false,
        loginInProgress: false,
        errors: action.payload.response || {'non_field_errors': action.payload.statusText}
      }
    case authActions.TOKEN_FAILURE:
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        loggedIn: false,
        errors: action.payload.response || {'non_field_errors': action.payload.statusText}
      }
    case authActions.LOGOUT_SUCCESS:
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        loggedIn: false,
        errors: {}
      }
    default:
      return state
  }
}
