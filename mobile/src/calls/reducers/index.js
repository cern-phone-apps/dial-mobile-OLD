import { combineReducers } from "redux";
import connection from "./connection";
import call from "./call";
import recent from "./recent";
import numbers from "./numbers";

const callsReducer = combineReducers({
  connection,
  call,
  recent,
  numbers
});

export default callsReducer;
