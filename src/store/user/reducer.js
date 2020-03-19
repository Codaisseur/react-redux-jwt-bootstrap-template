const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    default:
      return state;
  }
};
