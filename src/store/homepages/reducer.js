const initialState = {
  //homepages.all => [];
  all: [],
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_HOMEPAGES":
      return { ...state, all: [...action.payload] };
    case "SAVE_USER_HOMEPAGE":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
