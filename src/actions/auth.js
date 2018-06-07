import { RSAA } from 'redux-api-middleware'
import { withAuth, withRefresh } from 'src/reducers/auth'
import {
  REACT_APP_AUTH_LOGIN_ENDPOINT,
  REACT_APP_AUTH_LOGOUT_ENDPOINT,
  REACT_APP_AUTH_REFRESH_ENDPOINT
} from 'src/settings'

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE'

export const LOGOUT_REQUEST = '@@auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = '@@auth/LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = '@@auth/LOGOUT_FAILURE'

export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST'
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED'
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE'

export const login = (code) => ({
  [RSAA]: {
    endpoint: REACT_APP_AUTH_LOGIN_ENDPOINT,
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      LOGIN_REQUEST,
      LOGIN_SUCCESS,
      LOGIN_FAILURE
    ]
  }
})

export const logout = (code) => ({
  [RSAA]: {
    endpoint: REACT_APP_AUTH_LOGOUT_ENDPOINT,
    method: 'DELETE',
    body: (action, state) => (JSON.stringify({ 'token': action.auth.refresh.token })),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      LOGOUT_REQUEST,
      LOGOUT_SUCCESS,
      LOGOUT_FAILURE
    ]
  }
})

export const refreshAccessToken = () => ({
  [RSAA]: {
    endpoint: REACT_APP_AUTH_REFRESH_ENDPOINT,
    method: 'POST',
    body: '',
    headers: withRefresh({ 'Content-Type': 'application/json' }),
    types: [
      TOKEN_REQUEST,
      TOKEN_RECEIVED,
      TOKEN_FAILURE
    ]
  }
})
