const initialState = {
  seqPattern: [
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
  ],
  seqPatternMeta: { name: "name", color: "color" },

  seqSoundSelected: "Wood",
  Transportstate: "",
  SavedPatterns: [
    {
      name: "gerard",
      color: "red",
      pattern: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1],
      ],
    },
    {
      name: "donkie",
      color: "purple",
      pattern: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
      ],
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "PATTERNUPDATER": {
      return {
        ...state,
        seqPattern: action.payload,
      };
    }

    case "PATTERNUPDATERSELECTED": {
      return {
        ...state,
        seqPATRONSELECTED: action.payload,
      };
    }

    case "PatternSaver":
      return {
        ...state,
        SavedPatterns: [...state.SavedPatterns, action.payload],
      };

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

    case "Transportupdater": {
      return {
        ...state,
        Transportstate: action.payload,
      };
    }

    default:
      return state;
  }
}
