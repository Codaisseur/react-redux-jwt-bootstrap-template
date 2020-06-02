import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepageReducer from "./homepages/reducer";

export default combineReducers({
  appState,
  user,
  homepages: homepageReducer,
});
