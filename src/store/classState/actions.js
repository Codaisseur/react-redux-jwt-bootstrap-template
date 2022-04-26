import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const AddStudent = (payload) => ({
  type: "AddStudent",
  payload: payload,
});

export const DelStudent = (payload) => ({
  type: "DelStudent",
  payload: payload,
});

export const SaveClass = (payload) => ({
  type: "SaveClass",
  payload: payload,
});

export const StoreClassfromdatabase = (payload) => ({
  type: "SaveClass",
  payload: payload,
});

export const FetchStudents = (payload) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.get(`${apiUrl}/teacherportal`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(SaveClass(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
