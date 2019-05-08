import { API_ENDPOINT } from 'react-native-dotenv';
import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../util/tokens';

export const NUMBERS_REQUEST = '@@calls/NUMBERS_REQUEST';
export const NUMBERS_SUCCESS = '@@calls/NUMBERS_SUCCESS';
export const NUMBERS_FAILURE = '@@calls/NUMBERS_FAILURE';
export const NUMBERS_SET_ACTIVE = '@@calls/NUMBERS_SET_ACTIVE';

export const buildCallsApiEndpoint = path => {
  return `${API_ENDPOINT}${path}`;
};

/**
 * Action that triggers a retrieval of the user's phones on the backend.
 * It requires authentication with access token
 *
 * @param name username of the user to search
 * @returns {{}} The RSAA action
 */
export const getUserPhoneNumbers = () => ({
  [RSAA]: {
    endpoint: buildCallsApiEndpoint('/api/v1/numbers/'),
    method: 'GET',
    credentials: 'include',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [NUMBERS_REQUEST, NUMBERS_SUCCESS, NUMBERS_FAILURE]
  }
});

export function setActiveNumber(phoneNumber) {
  return {
    phoneNumber,
    type: NUMBERS_SET_ACTIVE
  };
}
