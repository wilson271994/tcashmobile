import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import navigationReducer from "./navigationReducer.js";
import loadingReducer from "./loadingReducer.js";
import alertReducer from "./alertReducer.js";
import listReducer from "./listReducer.js";
import transReducer from "./transReducer.js";

export const rootReducer = combineReducers(
  {
    loader      : loadingReducer,
    auth        : authReducer, 
    navigation  : navigationReducer,
    alert       : alertReducer,
    list        : listReducer,
    trans       : transReducer
  }
)