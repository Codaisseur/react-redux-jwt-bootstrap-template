const initialState = { loading: true, error: null };

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

    default:
      return state;
  }
};
