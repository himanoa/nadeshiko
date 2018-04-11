import { combineReducers } from "redux";
import { reducer as feedReducer } from "./feed";

export default combineReducers({ feedReducer });
