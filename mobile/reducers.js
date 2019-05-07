import {combineReducers} from "redux"
import callsReducer from "./src/calls/reducers/index";
// import authReducer from "./src/auth/reducers/index";
import auth from "./src/auth/reducers/auth"

export default combineReducers({
  calls: callsReducer,
  auth
});
