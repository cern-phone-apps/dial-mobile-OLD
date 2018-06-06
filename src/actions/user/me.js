import { RSAA } from 'redux-api-middleware'
import { withAuth } from 'src/reducers/auth'
import { REACT_APP_API_ME_ENDPOINT } from 'src/settings'

export const ME_REQUEST = '@@user/ME_REQUEST'
export const ME_SUCCESS = '@@user/ME_SUCCESS'
export const ME_FAILURE = '@@user/ME_FAILURE'

export const getMe = () => ({
  [RSAA]: {
    endpoint: REACT_APP_API_ME_ENDPOINT,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      ME_REQUEST,
      ME_SUCCESS,
      ME_FAILURE
    ]
  }
})
