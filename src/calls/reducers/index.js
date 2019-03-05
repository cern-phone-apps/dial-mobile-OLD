import { combineReducers } from "redux";
import connection from "./connection";

const callsReducer = combineReducers({
  connection
});

export default callsReducer;
