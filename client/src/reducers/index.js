//list of reducers
import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import user from "./user";

export default combineReducers({ alert, auth, user});
