import { combineReducers } from "redux";
import connection from "./connection";
import call from "./call";
import recent from "./recent";

const callsReducer = combineReducers({
  connection,
  call,
  recent
});

export default callsReducer;
