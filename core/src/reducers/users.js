import * as usersActions from '../actions/users';

const initialState = {
  searching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case usersActions.SEARCH_USERS_REQUEST:
      return { ...state, searching: true };
    case usersActions.SEARCH_USERS_SUCCESS:
    case usersActions.SEARCH_USERS_FAILURE:
      return { ...state, searching: false };
    default:
      return state;
  }
};
