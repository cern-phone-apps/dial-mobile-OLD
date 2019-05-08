import { combineReducers } from 'redux';
import { authReducer, callsReducer } from 'dial-core';

export default combineReducers({
  calls: callsReducer,
  auth: authReducer
});
