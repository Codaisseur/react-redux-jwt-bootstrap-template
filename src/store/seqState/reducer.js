import { SavedPatterns } from "./selectors";

const initialState = {
  seqPattern: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ],

  seqPatternMeta: { name: "name", color: "color" },

  seqSoundSelected: "Wood",

  Transportstate: "",

  SavedPatterns: [
    {
      name: "gerard",
      color: "red",
      pattern: [
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
      ],
    },
    {
      name: "donkie",
      color: "purple",
      pattern: [
        [0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
      ],
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "PATTERNUPDATER": {
      // console.log("PATTERNUPDATER", action.payload);
      return {
        ...state,
        seqPattern: action.payload,
      };
    }

    case "PatternSaver":
      console.log("PatternSaver", action.payload);

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
