const initialState = {
  //homepages.all => [];
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_HOMEPAGES":
      return { ...state, all: [...action.payload] };
    default:
      return state;
  }
};
