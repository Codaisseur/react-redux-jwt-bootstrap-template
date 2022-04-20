const initialState = {
  seqPattern: [
    { id: 1, Atrig: true, Btrig: false },
    { id: 2, Atrig: true, Btrig: true },
    { id: 3, Atrig: true, Btrig: false },
    { id: 4, Atrig: false, Btrig: true },
  ],
  seqPatternMeta: { name: "name", color: "color" },
  seqSoundSelected: "Wood",
  seqSongPattern: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "triggeraanuitAtrig": {
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

    case "SeqSoundSetter": {
      return {
        ...state,
        seqSoundSelected: action.payload,
      };
    }

    case "Patterncolorsetter": {
      return {
        ...state,
        seqPatternMeta: {
          ...state.seqPatternMeta,
          color: action.payload,
        },
      };
    }

    case "Patternnamesetter": {
      return {
        ...state,
        seqPatternMeta: {
          ...state.seqPatternMeta,
          name: action.payload,
        },
      };
    }

    case "PatternSaver": {
      console.log(action.payload);
      return {
        ...state,
        seqSongPattern: [...state.seqSongPattern, action.payload],
      };
    }

    default:
      return state;
  }
}
