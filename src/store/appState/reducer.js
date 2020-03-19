import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from "./actions";

const initialState = { loading: false, error: null, message: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_ERROR:
      return { ...state, error: action.payload };

    case CLEAR_ERROR:
      return { ...state, error: null };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
};
