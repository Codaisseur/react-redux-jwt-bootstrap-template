const classState = {
  Students: ["Erik", "Jan", "Karla"],
};

export default function reducer(state = classState, action) {
  switch (action.type) {
    case "AddStudent": {
      return {
        ...state,
        Students: [...state.Students, action.payload],
      };
    }

    default:
      return state;
  }
}
