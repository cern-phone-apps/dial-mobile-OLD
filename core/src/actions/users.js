import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../util/tokens';

export const SEARCH_USERS_REQUEST = '@@users/SEARCH_USERS_REQUEST';
export const SEARCH_USERS_SUCCESS = '@@users/SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAILURE = '@@users/SEARCH_USERS_FAILURE';

export default apiEndpoint => {
  const buildSearchEndpoint = name =>
    `${apiEndpoint}/api/v1/users/search/?username=${name}`;

  return {
    searchUsers: search => ({
      [RSAA]: {
        endpoint: buildSearchEndpoint(search),
        method: 'GET',
        credentials: 'include',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
          SEARCH_USERS_REQUEST,
          SEARCH_USERS_SUCCESS,
          SEARCH_USERS_FAILURE
        ]
      }
    })
  };
};
