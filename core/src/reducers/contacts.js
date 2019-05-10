import * as contactsActions from '../actions/contacts';

const initialState = {
  searching: false,
  contacts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case contactsActions.GET_CONTACTS_REQUEST:
      return { ...state, searching: true };
    case contactsActions.GET_CONTACTS_SUCCESS: {
      return { ...state, searching: false, contacts: action.payload.result };
    }
    case contactsActions.GET_CONTACTS_FAILURE:
      return { ...state, searching: false };
    default:
      return state;
  }
};
