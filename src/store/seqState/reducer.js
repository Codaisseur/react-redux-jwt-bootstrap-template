const initialState = {
  seqPattern: [
    { id: 1, Atrig: false, Btrig: false },
    { id: 2, Atrig: false, Btrig: false },
    { id: 3, Atrig: false, Btrig: false },
    { id: 4, Atrig: false, Btrig: false },
  ],
  seqSoundSelected: "Wood",
  seqSongPattern: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "triggeraanuitAtrig": {
      console.log("touched Atrig", action.payload);
      return {
        ...state,
        seqPattern: state.seqPattern.map((tel) => {
          if (tel.id === action.payload) {
            return { ...tel, Atrig: !tel.Atrig };
          } else {
            return tel;
          }
        }),
      };
    }
    case "triggeraanuitBtrig": {
      console.log("touched Btrig", action.payload);
      return {
        ...state,
        seqPattern: state.seqPattern.map((tel) => {
          if (tel.id === action.payload) {
            return { ...tel, Btrig: !tel.Btrig };
          } else {
            return tel;
          }
        }),
      };
    }

    default:
      return state;
  }
}
