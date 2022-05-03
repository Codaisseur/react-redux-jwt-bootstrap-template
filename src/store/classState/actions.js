import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const AddStudentsucces = (payload) => ({
  type: "AddStudentsucces",
  payload: payload,
});

export const AddStudent = (studentname, schoolname, classname, userId) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      dispatch(appLoading());
      const response = await axios.post(
        `${apiUrl}/teacherportal`,
        {
          studentname,
          schoolname,
          classname,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      dispatch(AddStudentsucces(response.data.student));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
        dispatch(appDoneLoading());
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const DelStudent = (payload) => ({
  type: "DelStudent",
  payload: payload,
});

export const StoreClassfromdatabase = (payload) => ({
  type: "SaveClass",
  payload: payload,
});

export const SaveClass = (payload) => ({
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
