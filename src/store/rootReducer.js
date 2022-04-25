import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import seqState from "./seqState/reducer";
import classState from "./classState/reducer";

export default combineReducers({
  appState,
  user,
  seqState,
  classState,
});
