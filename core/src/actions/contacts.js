import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../util/tokens';

export const GET_CONTACTS_REQUEST = '@@contacts/GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = '@@contacts/GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = '@@contacts/GET_CONTACTS_FAILURE';

export const ADD_CONTACTS_REQUEST = '@@contacts/ADD_CONTACTS_REQUEST';
export const ADD_CONTACTS_SUCCESS = '@@contacts/ADD_CONTACTS_SUCCESS';
export const ADD_CONTACTS_FAILURE = '@@contacts/ADD_CONTACTS_FAILURE';

export const REMOVE_CONTACTS_REQUEST = '@@contacts/REMOVE_CONTACTS_REQUEST';
export const REMOVE_CONTACTS_SUCCESS = '@@contacts/REMOVE_CONTACTS_SUCCESS';
export const REMOVE_CONTACTS_FAILURE = '@@contacts/REMOVE_CONTACTS_FAILURE';

export default apiEndpoint => {
  const buildCallsApiEndpoint = path => `${apiEndpoint}${path}`;

  return {
    getUserContacts: () => ({
      [RSAA]: {
        endpoint: buildCallsApiEndpoint('/api/v1/contacts/'),
        method: 'GET',
        credentials: 'include',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
          GET_CONTACTS_REQUEST,
          GET_CONTACTS_SUCCESS,
          GET_CONTACTS_FAILURE
        ]
      }
    }),

    addUserContact: contact => ({
      [RSAA]: {
        endpoint: buildCallsApiEndpoint('/api/v1/contacts/'),
        method: 'POST',
        credentials: 'include',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(contact),
        types: [
          ADD_CONTACTS_REQUEST,
          ADD_CONTACTS_SUCCESS,
          ADD_CONTACTS_FAILURE
        ]
      }
    }),

    removeUserContact: personId => ({
      [RSAA]: {
        endpoint: buildCallsApiEndpoint('/api/v1/contacts/'),
        method: 'DELETE',
        credentials: 'include',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ personId }),
        types: [
          REMOVE_CONTACTS_REQUEST,
          REMOVE_CONTACTS_SUCCESS,
          REMOVE_CONTACTS_FAILURE
        ]
      }
    })
  };
};
