const classState = {
  Students: ["Erik init", "Jan init", "Karla init"],
  SavedClass: [],
};

export default function reducer(state = classState, action) {
  switch (action.type) {
    case "AddStudent": {
      return {
        ...state,
        Students: [...state.Students, action.payload],
      };
    }
    case "DelStudent": {
      return {
        ...state,
        Students: state.Students.filter((name) => name !== action.payload),
      };
    }
    case "SaveClass": {
      return {
        ...state,
        SavedClass: action.payload,
      };
    }

    default:
      return state;
  }
}
