const initialState = { loading: true, error: null, message: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "APP_LOADING":
      return { ...state, loading: true };

    case "APP_DONE_LOADING":
      return { ...state, loading: false };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "UNSET_ERROR":
      return { ...state, error: null };

    case "SET_MESSAGE":
      return { ...state, message: action.payload };

    case "UNSET_MESSAGE":
      return { ...state, message: null };

    default:
      return state;
  }
};
