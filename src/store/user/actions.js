import { apiUrl } from "../../config/constants";
import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const signUp = (email, password, name) => {
  return async (dispatch, getState) => {
    const response = await axios.post(`${apiUrl}/signup`, {
      email,
      password,
      name
    });

    dispatch(loginSuccess(response.data));
  };
};
