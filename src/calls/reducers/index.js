import { combineReducers } from "redux";
import connection from "./connection";
import call from "./call";

const callsReducer = combineReducers({
  connection,
  call
});

export default callsReducer;
