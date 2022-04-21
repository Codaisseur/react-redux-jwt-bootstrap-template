const initialState = {
  seqPattern: [
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ],
  seqPatternMeta: { name: "name", color: "color" },
  seqSoundSelected: "Wood",
  seqSongPattern: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "PatternSavor": {
      console.log("Payload", action.payload);
      return {
        ...state,
        seqPattern: action.payload,
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
