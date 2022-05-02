const classState = {
  SavedClass: [],
};

export default function reducer(state = classState, action) {
  switch (action.type) {
    case "AddStudentsucces": {
      return {
        ...state,
        SavedClass: [...state.SavedClass, action.payload],
      };
    }
    // case "DelStudent": {
    //   return {
    //     ...state,
    //     Students: state.Students.filter((name) => name !== action.payload),
    //   };
    // }
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
