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
    case "DelStudent": {
      console.log("deze student wil ik verwijderen", action.payload);

      return state.Students.filter((item) => item === action.payload);
    }
    default:
      return state;
  }
}
