import {combineReducers} from "redux"
import callsReducer from "./src/calls/reducers/index";


export default combineReducers({
  calls: callsReducer
});
